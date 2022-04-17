import {takeEvery, put, all, select} from "redux-saga/effects"
import axios from "axios";

export const getState = (state) => state.photos

const delay = () => new Promise((resolve) => {
    setTimeout(resolve, 500)
})

function* workerGetPhotos() {
    yield put({type: 'SHOW_LOADER'})
    yield delay()
    const {data} = yield axios.get('https://jsonplaceholder.typicode.com/photos?_limit=24')
    const dataPhotos = yield {
        firstCategory: [...data.slice(0, 6)],
        secondCategory: [...data.slice(6, 12)],
        thirstCategory: [...data.slice(12, 18)],
        fourthCategory: [...data.slice(18, 24)]
    }
    yield put({type: 'SET_PHOTOS', payload: dataPhotos})
    yield put({type: 'HIDE_LOADER'})
}

function* workerGetPhoto() {
    yield put({type: 'SHOW_LOADER'})
    yield delay()
    const state = yield select(getState)
    const {data} = yield axios.get(`https://jsonplaceholder.typicode.com/photos/${state.idPhoto}`)
    yield put({type: 'SET_PHOTO', payload: data})
    yield put({type: 'HIDE_LOADER'})
}

function* watchGetPhotos() {
    yield takeEvery('GET_PHOTOS', workerGetPhotos)
}

function* watchGetPhoto() {
    yield takeEvery('GET_PHOTO', workerGetPhoto)
}

export default function* rootSaga() {
    yield all([
        watchGetPhotos(),
        watchGetPhoto()
    ])
}