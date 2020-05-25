import React, { useState } from 'react'
import { Button,Form } from 'react-bootstrap';

export default ()=>{

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    function onChangeEmail(e){
        // console.log(e.target.value,"email================")
        setEmail(e.target.value);
    }

    function onChangepassword(e){
        // console.log(e.target.value,"password=================")
        setPassword(e.target.value);
    }


    function submitLogin(e){
        e.preventDefault();
        console.log("masuk sumbit login===================")
        let data = {
            email:email,
            password:password
        }
        fetch('http://localhost:3001/login', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            localStorage.setItem("access_token",data.access_token);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    }

    return (
        <>
        <div className="formLogin">
            <Form onSubmit={submitLogin}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={onChangeEmail} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={onChangepassword} />
                </Form.Group>
    
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
        </>
    )
}