import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import avatar from "../../assets/images/avatar.jpeg"

const About = () => {
    return (
        <Container className="mt-2">
            <Row>
                <Col style={{maxWidth: '400px'}}>
                    <img className="w-100" style={{borderRadius: '12px'}} src={avatar} alt="avatar"/>
                </Col>
                <Col className="justify-content-start">
                    <h1>Рылов Владислав Вадимович</h1>
                    <p>Телефон: <a className="text-decoration-none" href="tel:89517724373">89517724373</a></p>
                    <p>Email: <a className="text-decoration-none" href="mailto:Vlad.Rulov@yandex.ru">Vlad.Rulov@yandex.ru</a></p>
                    <p>Здравствуйте, я frontend-разработчик со стажем 1 год. Разрабатывал сервис безналичных чаевых, сервис по анилизу статистики маркетплейсов. Всегда рад обучаться чему-то новому.</p>
                    <p>Мой стек:</p>
                    <ul>
                        <li>HTML, CSS, Javascript, Typescript</li>
                        <li>React, Redux, React-Router, Redux-Saga, Next.Js</li>
                        <li>Vue, VueX, Vue-Router</li>
                        <li>styled-components, Figma, MaterialUI</li>
                        <li>REST, GraphQL</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default About;