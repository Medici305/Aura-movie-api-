const initialState = {
    searched: []
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_SEARCHED':
            return {
                ...state,
                searched: action.payload.search
            }
        default:
            return {
                ...state
            }
    }
}

export default movieReducer;