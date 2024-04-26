import http from "./httpService";

export function getOwnerProjectsApi(qs) {
  return http.get(`/project/owner-projects${qs}`).then(({ data }) => data.data);
}

export function removeProjectApi(id) {
  return http.delete(`/project/${id}`).then(({ data }) => data.data);
}

export function createProjectApi(data) {
  return http.post(`/project/add`, data).then(({ data }) => data.data);
}

export function editProjectApi({ id, newProject }) {
  return http
    .patch(`/project/update/${id}`, newProject)
    .then(({ data }) => data.data);
}

export function toggelProjectStatusApi({ id, data }) {
  return http.patch(`/project/${id}`, data).then(({ data }) => data.data);
}

export function getprojectApi(id) {
  return http.get(`/project/${id}`).then(({ data }) => data.data);
}

export function getProjectsApi(qs) {
  return http.get(`/all-project/list${qs}`).then(({ data }) => data.data);
}

export function changeUserStatusApi({ userId, data }) {
  return http
    .patch(`/admin/user/verify/${userId}`, data)
    .then(({ data }) => data.data);
}
