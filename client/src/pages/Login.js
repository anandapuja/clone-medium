import React, { useState } from 'react'
import { Button,Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import url from '../url';

export default ({logStatus})=>{
    const history = useHistory();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    function onChangeEmail(e){
        setEmail(e.target.value);
    }

    function onChangepassword(e){
        setPassword(e.target.value);
    }

    function submitLogin(e){
        e.preventDefault();
        let data = {
            email:email,
            password:password
        }
        fetch(`${url}/login`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
        .then(response => response.json())
        .then(data => {
            Swal.fire(
                'Welcome!',
                'Let`s create your story!',
                'success'
              )
            localStorage.setItem("access_token",data.access_token);
            logStatus(true);
            history.push('/add-article');
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