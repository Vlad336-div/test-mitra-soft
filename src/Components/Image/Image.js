import React from 'react';
import {Link} from "react-router-dom"
import {Container, Button} from "react-bootstrap"
import "./style.css"

const Image = ({src, id}) => {
    return (
        <div className="image-wrap">
            <img src={src}/>
            <Container className="button-wrap">
                <Link to={`image/${id}`}>
                    <Button variant="primary">Подробнее</Button>
                </Link>
            </Container>
        </div>
    );
};

export default Image;