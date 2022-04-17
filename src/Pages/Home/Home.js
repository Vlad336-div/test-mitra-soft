import React, {useState} from 'react';
import {Container, Tabs, Tab} from "react-bootstrap"
import Photos from "../../Components/Photos/Photos"

const Home = () => {
    const [key, setKey] = useState('firstCategory')

    return (
        <Container className="mt-2">
            <h1>Галерея</h1>
            <Tabs
                activeKey={key}
                onSelect={(k) => setKey(k)}
                id="uncontrolled-tab-example"
                className="mb-2 mt-2"
            >
                <Tab eventKey="firstCategory" title="Первая категория"/>
                <Tab eventKey="secondCategory" title="Вторая категория"/>
                <Tab eventKey="thirstCategory" title="Третья категория"/>
                <Tab eventKey="fourthCategory" title="Четвёртая категория"/>
            </Tabs>
            <Photos activeKey={key}/>
        </Container>
    );
};

export default Home;