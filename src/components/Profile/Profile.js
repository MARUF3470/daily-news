import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Profile = () => {
    const { user } = useContext(AuthContext)
    const [name, setName] = useState(user?.displayName)
    const photoUrlRef = useRef(user?.photoURL)
    const handleForm = event => {
        event.preventDefault()
        console.log(photoUrlRef.current.value)
    }
    const handleName = event => {
        setName(event.target.value)
    }
    return (
        <Form onSubmit={handleForm}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={handleName} defaultValue={name} type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Photo Url</Form.Label>
                <Form.Control ref={photoUrlRef} defaultValue={user?.photoURL} type="text" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default Profile;