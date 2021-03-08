import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch,
  Link,
} from "react-router-dom";
import { Players } from "../Players/Players";
import  Game  from "../components/Game";
import  Profile  from "../components/Profile";
import { Questions } from "../Questions/Questions";
import { Stats } from "../Stats/Stats";
import { Authenticate } from "../User/Authenticate";
import { disconnectUser } from "../User/userEffects";
import { launchSequence } from "./appEffects";
import "./Navigation.css";

const PrivateRoute = ({ children, ...rest }) => {
  const isAuthenticated = useSelector(
    (state) => state.user.isAuthenticated
  );
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/auth",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const Navigation = () => {
  const isAuthenticated = useSelector(
    (state) => state.user.isAuthenticated
  );
  const player = useSelector((state) => state.user.player);
  const isLoading = useSelector((state) => state.app.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(launchSequence());
  }, [dispatch]);
  return isLoading ? (
    <div className="loading-root">
      <img
        src="/assets/spinner.svg"
        alt="Loading animation"
        style={{ height: "50px" }}
      />
    </div>
  ) : (
    <Router>
      {isAuthenticated ? (
        <div className="header">
          <Link to="/" className="app-name">
            <img src="/assets/logo.png" alt="Blind test logo" />
            Blind-Test App
          </Link>
          <div className="app-links">
            <Link to="/game">Game</Link>
            <Link to="/profile">Profile</Link>
            <Link
              to="/auth"
              onClick={() => disconnectUser()}
              className="sign-out-button"
            >
              Sign Out
              <img src={player.avatar} alt="User avatar" />
            </Link>
          </div>
        </div>
      ) : undefined}
      <Switch>
        <Route path="/auth">
          <Authenticate />
        </Route>
        <PrivateRoute path="/game">
          <Game/>
        </PrivateRoute>
        <PrivateRoute path="/profile">
          <Profile src={isAuthenticated ? player : undefined} />
        </PrivateRoute>
        <PrivateRoute path="/" >
         
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default Navigation;
