import axios from 'axios'

const url = 'https://flapify.herokuapp.com/lap/'

export const getProjects = () => axios.get(url + 'projects');
export const getProject = (projectId) => axios.get(url + projectId);
export const createProject = (projectName) => axios.post(url + projectName);
export const addLap = (projectId) => axios.put(url + projectId);
export const deleteProject = (projectId) => axios.delete(url + projectId);