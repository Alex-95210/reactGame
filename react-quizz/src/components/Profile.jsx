import React, { useRef, useSelector } from "react"
import {Form, Container, Row, Col, Image, Card} from 'react-bootstrap'

export default function Profile(props) {
    console.log(props.src)
    return (

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.src.name}</Card.Title>
                    <Card.Img variant="top" src={props.src.avatar} />
                    <Card.Text>
                    
                    {props.src.nb_played_games}
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
    )
}