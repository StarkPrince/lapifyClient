import { ADD_LAP, GET_ALL, GET_PROJECT, CREATE_PROJECT } from '../constants/actionType'

export default (state = [], action) =>
{
    switch (action.type) {
        case ADD_LAP:
        case GET_PROJECT:
        case GET_ALL:
        case CREATE_PROJECT:
            return action.payload
        default:
            return state
    }
}