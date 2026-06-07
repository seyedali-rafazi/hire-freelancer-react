import { mockStore } from "../mocks/mockStore";

export function getOwnerProjectsApi(qs) {
  return mockStore.getOwnerProjects(qs);
}

export function removeProjectApi(id) {
  return mockStore.removeProject(id);
}

export function createProjectApi(data) {
  return mockStore.createProject(data);
}

export function editProjectApi({ id, newProject }) {
  return mockStore.editProject({ id, newProject });
}

export function toggelProjectStatusApi({ id, data }) {
  return mockStore.toggleProjectStatus({ id, data });
}

export function getprojectApi(id) {
  return mockStore.getProject(id);
}

export function getProjectsApi(qs) {
  return mockStore.getProjects(qs);
}

export function getAllProjectsApi() {
  return mockStore.getAllProjects();
}

export function changeUserStatusApi({ userId, data }) {
  return mockStore.changeUserStatus({ userId, data });
}
