
const initialState = {
    searchTerm: '',
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case "SEARCH":
            return {...state, searchTerm: payload};
        default:
            break;
    }
    return state;
}