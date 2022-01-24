import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
// import { Link } from "react-router-dom";

export const NavBar = (props) => {
    return (
        <>
        {props.user ? (<Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Breaking Blog</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/allposts">All Posts</Nav.Link>
                        <Nav.Link href="/mypost">My Posts</Nav.Link>
                        <Nav.Link href="/addpost">Add Post</Nav.Link>
                        <Nav.Link href="">Logged in as {props.logOnUser}</Nav.Link>
                        <Nav.Link href="">Logout</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>) : (<Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Breaking Blog</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/allposts">All Posts</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/Register">Register</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>)}
        </>

    )
};