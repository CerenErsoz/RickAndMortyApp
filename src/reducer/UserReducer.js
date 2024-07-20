
const initialState = {
    userInfo: false,
    userName: "Guest"
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case "USER_INFO":
            return {...state, userInfo: payload};
            
        case "CHANGE_NAME":
            return {...state, userName: payload};
    
        default:
            break;
    }
    return state;
}