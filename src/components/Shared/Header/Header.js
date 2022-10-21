import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import LeftNav from '../LeftNav/LeftNav';
const Header = () => {
    const { logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const { user } = useContext(AuthContext)
    return (
        <div className='mb-4'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand ><Link to='/'>Daily News</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">All News</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Link to='/profile'>
                                {user?.photoURL ? <Image roundedCircle style={{ height: '30px' }} src={user?.photoURL}></Image> : <FaUserAlt></FaUserAlt>}
                            </Link>
                            <div>
                                {user?.uid ? <>
                                    <span className='text-light'>{user?.displayName}</span> <Button variant="outline-light" onClick={handleLogout}>SignOut</Button>
                                </> : <>
                                    <Link to='/login'>LogIn</Link> <Link to='/register'>Register</Link>
                                </>
                                }
                            </div>
                        </Nav>
                        <div className='d-lg-none'>
                            <LeftNav></LeftNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;