import React, {useEffect} from 'react';
import {Container, Button} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"

const Image = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {activePhoto} = useSelector(state => state.photos)

    useEffect(() => {
        dispatch({type: 'GET_PHOTO', payload: id})
    }, [id])

    return (
        <Container className="d-flex flex-column align-items-center justify-content-center mt-2">
            <img src={activePhoto?.url}/>
            <p>ID - {activePhoto?.id}</p>
            <h1>{activePhoto?.title}</h1>
            <Link to="/">
                <Button variant="primary">Назад</Button>
            </Link>
        </Container>
    );
};

export default Image;