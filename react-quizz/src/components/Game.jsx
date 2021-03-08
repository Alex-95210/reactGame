import React, { useRef } from "react"
import {Form, Button, Card} from 'react-bootstrap'

export default function Game() {
    const emailRef = useRef()
    const mdpRef = useRef()
    const mdpConfirmRef = useRef()
    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Game</h2>
                </Card.Body>
            </Card>
        
        </div>
    )
}