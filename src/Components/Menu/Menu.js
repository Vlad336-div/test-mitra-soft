import React from 'react';
import {Navbar, Container, Offcanvas, Nav} from "react-bootstrap";
import {Link} from "react-router-dom"
import avatar from "../../assets/images/avatar.jpeg"

const Menu = () => {
    return (
        <Navbar bg="primary" variant="dark" expand={false}>
            <Container fluid>
                <Navbar.Brand>
                    <Link to="/" className="text-light text-decoration-none">Тестовое задание</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="start"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Меню</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="d-flex flex-column justify-content-start align-items-center">
                        <Nav className="justify-content-start pe-3 mb-2 w-100">
                            <Nav.Link as="li">
                                <Link to="/" className="text-decoration-none">Галерея</Link>
                            </Nav.Link>
                            <Nav.Link as="li">
                                <Link to="/about" className="text-decoration-none">Обо мне</Link>
                            </Nav.Link>
                        </Nav>
                        <div style={{
                            background: `url(${avatar})`,
                            backgroundSize: 'cover',
                            width: '200px',
                            height: '200px',
                            borderRadius: '50%'
                        }}/>
                        <div className="w-100 text-center mt-2">
                            <p>Рылов Владислав</p>
                            <a className="text-decoration-none" href="mailto:Vlad.Rulov@yandex.ru">Vlad.Rulov@yandex.ru</a>
                        </div>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default Menu;