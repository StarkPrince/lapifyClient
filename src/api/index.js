import axios from 'axios'

const url = 'http://localhost:5000/'

export const getProjects = () => axios.get(url + 'lap/projects');
export const getProject = (projectId) => axios.get(url + 'lap/' + projectId);
export const createProject = (projectName) => axios.post(url + 'lap/' + projectName);
export const addLap = (projectId) => axios.put(url + 'lap/' + projectId);
export const deleteProject = (projectId) => axios.delete(url + 'lap/' + projectId);

export const login = (email, password) => axios.get(url + 'user/login/', { params: { email, password } });
export const register = (email, password, name) => axios.post(url + 'user/register/', { email, password, name });
export const getUserProjects = () => axios.get(url + 'user/oldProjects');
export const newUserProject = (projectName, uid) => axios.post(url + 'user/new/', { projectName, uid });
export const deleteUserProject = (projectId) => axios.delete(url + 'user/delete/' + projectId);