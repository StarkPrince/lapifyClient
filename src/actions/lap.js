import { ADD_LAP, GET_ALL, GET_PROJECT, CREATE_PROJECT, DELETE_PROJECT } from '../constants/actionType'

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
        return dispatch({ type: GET_PROJECT, payload: data });
    }
    catch (error) {
        console.log(error)
    }
}

export const createProject = (projectName) => async (dispatch) =>
{
    try {
        await api.createProject(projectName)
        const { data } = await api.getProjects()
        return dispatch({ type: CREATE_PROJECT, payload: data });
    }
    catch (error) {
        console.log(error)
    }
}

export const addLap = (_id) => async (dispatch) =>
{
    try {
        const { data } = await api.addLap(_id)
        return dispatch({ type: ADD_LAP, payload: data });
    }
    catch (error) {
        console.log(error)
    }
}

export const deleteProject = (_id) => async (dispatch) =>
{
    try {
        await api.deleteProject(_id)
        const { data } = await api.getProjects()
        return dispatch({ type: DELETE_PROJECT, payload: data });
    }
    catch (error) {
        console.log(error)
    }
}