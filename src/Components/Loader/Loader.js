import React from 'react';
import {Container, Spinner} from "react-bootstrap"

const Loader = () => {
    return (
        <Container
            className="d-flex justify-content-center align-items-center w-100 h-100"
            style={{background: 'rgba(0, 0, 0, 0.4)', position: 'absolute', top: 0, left: 0, zIndex: 2, maxWidth: '100%'}}
        >
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Container>
    );
};

export default Loader;