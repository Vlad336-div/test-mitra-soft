const initialState = {
    photos: {
        firstCategory: [],
        secondCategory: [],
        thirstCategory: [],
        fourthCategory: []
    },
    idPhoto: '0',
    activePhoto: {}
}

export const photosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PHOTOS':
            return state
        case 'SET_PHOTOS':
            return {...state, photos: action.payload}
        case 'GET_PHOTO':
            return {...state, idPhoto: action.payload, activePhoto: {}}
        case 'SET_PHOTO': {
            return {...state, activePhoto: action.payload}
        }
        default:
            return state
    }
}