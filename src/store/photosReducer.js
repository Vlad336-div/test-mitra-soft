const initialState = {
    photos: {
        firstCategory: [],
        secondCategory: [],
        thirstCategory: [],
        fourthCategory: []
    }
}

export const photosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PHOTOS':
            return state
        case 'SET_PHOTOS':
            console.log(action.payload)
            return {...state, photos: action.payload}
        default:
            return state
    }
}