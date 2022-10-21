import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
const Registration = () => {
    const nevigate = useNavigate()
    const [accepted, setAccepted] = useState(false)
    const [error, setError] = useState()
    const { signUp, updateUserProfile, emailVarification } = useContext(AuthContext)
    const handleRegistrationForm = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.Name.value;
        const photo = form.photo.value;
        console.log(email, password, name, photo)
        signUp(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                form.reset()
                nevigate('/')
                setError('')
                handleUserProfile(name, photo)
                handleEmailVarification()
                toast.success('Registration done')
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }
    const checked = event => {
        setAccepted(event.target.checked)
    }
    const handleUserProfile = (name, photo) => {
        const profile = {
            displayName: name,
            photoURL: photo
        }
        updateUserProfile(profile)
            .then(() => { })
            .then(error => console.log(error))
    }
    const handleEmailVarification = () => {
        emailVarification()
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <Form onSubmit={handleRegistrationForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name='Name' type="text" placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control name='photo' type="text" placeholder="Photo Url" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group> <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={checked} type="checkbox" label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>} />
                </Form.Group>

                <div>
                    {error}
                </div>
                <Button variant="primary" type="submit" disabled={!accepted}>
                    Register
                </Button>
            </Form>
        </div >
    );
};

export default Registration;