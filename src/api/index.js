import axios from 'axios'

const url = 'http://flapify.herokuapp.com/lap/'

export const getProjects = () => axios.get(url + 'projects');
export const getProject = (projectId) => axios.get(url + projectId);
export const newProject = (projectName) => axios.post(url + projectName);
export const addLap = (projectId) => axios.put(url + projectId);
