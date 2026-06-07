import { mockStore } from "../mocks/mockStore";

export function getUser() {
  return mockStore.getCurrentUser();
}

export function logutApi() {
  return mockStore.logout();
}

export function getUsersApi() {
  return mockStore.getUsers();
}

export function editProfileApi(data) {
  return mockStore.editProfile(data);
}

export function loginAsApi(role) {
  return mockStore.loginAs(role);
}

export function signupApi(data) {
  return mockStore.signup(data);
}

export function completeProfile(data) {
  return mockStore.editProfile({ ...data, isActive: true }).then((res) => ({
    data: { data: res },
  }));
}

export function getOtp() {
  return mockStore.loginAs("OWNER");
}

export function checkOtp() {
  return Promise.resolve({ data: { data: {} } });
}
