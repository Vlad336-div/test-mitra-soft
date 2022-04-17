import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux"
import {createStore, compose, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga"
import {rootReducer} from "./store/rootReducer";
import rootSaga from "./store/sagas/index"
import {BrowserRouter} from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

sagaMiddleware.run(rootSaga)
