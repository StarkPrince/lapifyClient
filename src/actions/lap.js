import { ADD_LAP, GET_ALL, GET_PROJECT, CREATE_PROJECT } from '../constants/actionType'

import * as api from '../api/index.js'

export const getProjects = () => async (dispatch) =>
{
    try {
        const { data } = await api.getProjects()
        dispatch({ type: GET_ALL, payload: data });
    }
    catch (error) {
        console.log(error)
    }
}

export const getProject = (id) => async (dispatch) =>
{
    try {
        const { data } = await api.getProject(id)
        cdispatch({ type: GET_PROJECT, payload: data });
    }
    catch (error) {
        console.log(error)
    }
}

export const createProject = (project) => async (dispatch) =>
{
    try {
        const { data } = await api.createProject(project)
        dispatch({ type: CREATE_PROJECT, payload: data });
    }
    catch (error) {
        console.log(error)
    }
}

export const addLap = () => async (dispatch) =>
{
    try {
        const { data } = await api.addLap()
        dispatch({ type: ADD_LAP, payload: data });
    }
    catch (error) {
        console.log(error)
    }
}