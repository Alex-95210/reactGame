import { Container } from 'react-bootstrap';
import Auth from'./auth';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <Container className="d_flex align-items-center justify-content-center" style={{maxWidth: "400px"}}>
      <Auth/>
    </Container>
  );
}

export default App;