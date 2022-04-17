import React from 'react';
import {Container, Button} from "react-bootstrap"
import "./style.css"

const Image = ({src}) => {
    return (
        <div className="image-wrap">
            <img src={src}/>
            <Container className="button-wrap">
                <Button variant="primary">Открыть картинку</Button>
            </Container>
        </div>
    );
};

export default Image;