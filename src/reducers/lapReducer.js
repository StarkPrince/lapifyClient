import { ADD_LAP, GET_PROJECT, CREATE_PROJECT } from '../constants/actionType'

const lapReducer = (state = {}, action) =>
{
    switch (action.type) {
        case ADD_LAP:
            return action.payload
        case GET_PROJECT:
            return action.payload
        default:
            return state
    }
}

export default lapReducer