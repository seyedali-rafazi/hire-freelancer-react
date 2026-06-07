import { mockStore } from "../mocks/mockStore";

export function getCategoryApi() {
  return mockStore.getCategories();
}
