import { GET_ALL } from '../constants/actionType'

const projectReducer = (state = [], action) =>
{
    switch (action.type) {
        case GET_ALL:
            return action.payload
        default:
            return state
    }
}

export default projectReducer