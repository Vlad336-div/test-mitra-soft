import {takeEvery, put} from "redux-saga/effects"
import axios from "axios";

const delay = () => new Promise((resolve) => {
    setTimeout(resolve, 500)
})

function* workerGetPhotos() {
    yield put({type: 'SHOW_LOADER'})
    yield delay()
    const res = yield axios.get('https://jsonplaceholder.typicode.com/photos?_limit=24')
    const dataPhotos = yield {
        firstCategory: [...res.data.slice(0, 6)],
        secondCategory: [...res.data.slice(6, 12)],
        thirstCategory: [...res.data.slice(12, 18)],
        fourthCategory: [...res.data.slice(18, 24)]
    }
    yield put({type: 'SET_PHOTOS', payload: dataPhotos})
    yield put({type: 'HIDE_LOADER'})
}

function* watchGetPhotos() {
    yield takeEvery('GET_PHOTOS', workerGetPhotos)
}

export default function* rootSaga() {
    yield watchGetPhotos()
}