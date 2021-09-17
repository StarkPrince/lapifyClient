import { LOGIN, REGISTER, LOGOUT, GET_USER_PROJECTS, USER_DELETE_PROJECT, USER_NEW_PROJECT } from '../constants/actionType'

const userReducer = (state = {}, action) =>
{
    switch (action.type) {
        case LOGIN:
            return action.payload
        case REGISTER:
            return action.payload
        case LOGOUT:
            return action.payload
        case GET_USER_PROJECTS:
            return action.payload
        case USER_DELETE_PROJECT:
            return action.payload
        case USER_NEW_PROJECT:
            return action.payload
        default:
            return state
    }
}

export default userReducer
