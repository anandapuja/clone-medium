import React, { useState } from 'react'
import { Button,Form } from 'react-bootstrap';

export default ()=>{

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [username,setUsername] = useState("");


    function onChangeEmail(e){
        // console.log(e.target.value,"email================")
        setEmail(e.target.value);
    }

    function onChangePassword(e){
        // console.log(e.target.value,"password=================")
        setPassword(e.target.value);
    }

    function onChangeUsername(e){
        // console.log(e.target.value,"password=================")
        setUsername(e.target.value);
    }

    function submitRegister(e){
        e.preventDefault();
        console.log("masuk sumbit login===================")
        let data = {
            email:email,
            user_name:username,
            password:password
        }
        fetch('http://localhost:3001/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(data),
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
            <Form onSubmit={submitRegister}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={onChangeEmail} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>User name</Form.Label>
                    <Form.Control type="text" placeholder="Enter user name" onChange={onChangeUsername} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={onChangePassword} />
                </Form.Group>
    
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
        </>
    )
}