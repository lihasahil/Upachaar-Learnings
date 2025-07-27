import { apiClient } from "../lib/api-client";

export const fetchUser = async () => {
  const response = await apiClient.get("/admin/dashboard");
  return response.data;
};
