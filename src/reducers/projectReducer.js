import { GET_ALL, CREATE_PROJECT } from '../constants/actionType'

const projectReducer = (state = [], action) =>
{
    switch (action.type) {
        case GET_ALL:
            return action.payload
        case CREATE_PROJECT:
            return action.payload
        default:
            return state
    }
}

export default projectReducer