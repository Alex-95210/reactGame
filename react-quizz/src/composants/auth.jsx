  
import React, { useRef } from "react"
import {Form, Button, Card} from 'react-bootstrap'

export default function Auth() {
    const emailRef = useRef()
    const mdpRef = useRef()
    const mdpConfirmRef = useRef()
    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Connexion</h2>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Adresse mail</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>
                        <Form.Group id="motDePasse">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control type="password" ref={mdpRef} required/>
                        </Form.Group>
                        <Form.Group>
                            <Button className="w-100" type="submit">
                                Valider
                            </Button>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}