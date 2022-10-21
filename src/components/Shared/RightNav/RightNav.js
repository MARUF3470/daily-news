import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle, FaFacebook, FaYoutube, FaTwitch, FaTwitter, FaDiscord } from "react-icons/fa";
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Carousol from '../../BrandCarousol/Carousol';
const RightNav = () => {
    const { googleSignIn } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(res => {
                const user = res.user;
                console.log(user)

            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <ButtonGroup vertical className='w-75'>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> SignIn With Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> SignIn With Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find Us On</h5>
                <ButtonGroup vertical className='w-75'>
                    <Button className='mb-2' variant="outline-dark"><FaFacebook></FaFacebook> Facebook</Button>
                    <Button className='mb-2' variant="outline-dark"><FaYoutube></FaYoutube>Youtube</Button>
                    <Button className='mb-2' variant="outline-dark"><FaTwitter></FaTwitter> Twitter</Button>
                    <Button className='mb-2' variant="outline-dark"><FaDiscord></FaDiscord> Discord</Button>
                    <Button className='mb-2' variant="outline-dark"><FaTwitch></FaTwitch> Twitch</Button>
                </ButtonGroup>
            </div>
            <div>
                <Carousol></Carousol>
            </div>
        </div>
    );
};

export default RightNav;