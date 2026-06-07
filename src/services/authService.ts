import { mockStore } from "../mocks/mockStore";
import type { EditProfileData, SignupData, UserRole } from "../types";

export function getUser() {
  return mockStore.getCurrentUser();
}

export function logutApi() {
  return mockStore.logout();
}

export function getUsersApi() {
  return mockStore.getUsers();
}

export function editProfileApi(data: EditProfileData) {
  return mockStore.editProfile(data);
}

export function loginAsApi(role: UserRole) {
  return mockStore.loginAs(role);
}

export function signupApi(data: SignupData) {
  return mockStore.signup(data);
}

export function completeProfile(data: EditProfileData) {
  return mockStore.editProfile({ ...data, isActive: true }).then((res) => ({
    data: { data: res },
  }));
}

export function getOtp(_data?: unknown) {
  return mockStore.loginAs("OWNER");
}

export function checkOtp(_data?: { phoneNumber?: string; otp?: string }) {
  return Promise.resolve({ data: { data: {} } });
}
