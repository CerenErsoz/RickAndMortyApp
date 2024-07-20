
export const userInfo = () => {
    return{
        type: "USER_INFO",
        payload: true,
    }
}

export const changeName = (userName) => {
    return{
        type: "CHANGE_NAME",
        payload: userName,
    }
}