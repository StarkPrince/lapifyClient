import { LOGIN, REGISTER, GET_USER_PROJECTS, USER_DELETE_PROJECT, USER_NEW_PROJECT } from '../constants/actionType'

import * as api from '../api/index.js'
export const login = (email, password) => async (dispatch) => 
{
    try {
        const { data } = await api.login(email, password)
        console.log(data);
        return dispatch({ type: LOGIN, payload: data })
    }
    catch (e) {
        console.log(e)
    }
}

export const register = (email, password, name) => async (dispatch) =>
{
    try {
        const { data } = await api.register(email, password, name);
        return dispatch({ type: REGISTER, payload: data })
    }
    catch (e) {
        console.log(e)
    }
}

export const getProjects = (uid) => async (dispatch) =>
{
    try {
        const { data } = await api.getUserProjects(uid);
        console.log(uid);
        return dispatch({ type: GET_USER_PROJECTS, payload: data })
    }
    catch (e) {
        console.log(e)
    }
}

export const deleteProject = (id, uid) => async (dispatch) =>
{
    try {
        await api.deleteProject(id);
        const { data } = await api.getProjects(uid);
        return dispatch({ type: USER_DELETE_PROJECT, payload: data })
    }
    catch (e) {
        console.log(e)
    }
}

export const newProject = (name, uid) => async (dispatch) =>
{
    try {
        const { data } = await api.newUserProject(name, uid);
        return dispatch({ type: USER_NEW_PROJECT, payload: data })
    }
    catch (e) {
        console.log(e)
    }
}