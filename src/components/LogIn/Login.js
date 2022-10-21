import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast, { Toaster } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Login = () => {
    const [error, setError] = useState()
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || '/'
    const { signIn, setLoading } = useContext(AuthContext)
    const handleLoginForm = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                form.reset()
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Verify your email first')
                }
                setError('')
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
            .finally(() => { setLoading(false) })
    }
    return (
        <div>
            <Form onSubmit={handleLoginForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <p>{error}</p>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div >
    );
};

export default Login;