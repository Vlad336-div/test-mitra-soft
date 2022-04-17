import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Router from "./router";
import Menu from "./Components/Menu/Menu";
import Loader from "./Components/Loader/Loader"

const App = () => {
    const dispatch = useDispatch()
    const {loading} = useSelector(state => state.app)

    useEffect(() => {
        dispatch({type: 'GET_PHOTOS'})
    }, [])

    return (
        <div>
            {
                loading && <Loader/>
            }
            <Menu/>
            <Router/>
        </div>
    );
};

export default App;
