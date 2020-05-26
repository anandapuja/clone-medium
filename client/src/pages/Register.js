import React, { useState } from 'react'
import { Button,Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

export default (props)=>{

    const history = useHistory();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [username,setUsername] = useState("");
    const [avatar, setAvatar] = useState('');
    const [about, setAbout] = useState('');


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

    function onChangeAvatar(e){
        // console.log(e.target.value,"password=================")
        setAvatar(e.target.value);
    }

    function onChangeAbout(e){
        // console.log(e.target.value,"password=================")
        setAbout(e.target.value);
    }

    function submitRegister(e){
        e.preventDefault();
        console.log("masuk sumbit login===================")
        let data = {
            email:email,
            user_name:username,
            password:password,
            avatar:avatar,
            about_me:about
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
            Swal.fire(
                'Welcome!',
                'Let`s create your story!',
                'success'
              )
            localStorage.setItem("access_token",data.access_token);
            history.push('/add-article');
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

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Avatar Img Url</Form.Label>
                    <Form.Control type="text" placeholder="Avatar image" onChange={onChangeAvatar} />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>About</Form.Label>
                    <Form.Control as="textarea" rows="3" onChange={onChangeAbout} placeholder="About" />
                </Form.Group>
    
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
        </>
    )
}