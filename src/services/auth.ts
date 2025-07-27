import { apiClient } from "../lib/api-client";

interface RegisterUserPayload {
  name: string;
  email: string;
  password: string;
  role: string;
} 

export const registerUser = async (userData: RegisterUserPayload) => {
  const response = await apiClient.post("/user/register", userData);
  return response.data;
};

interface loginUserPayload {
  email: string;
  password: string;
}

export const loginUser = async (userData: loginUserPayload) => {
  const response = await apiClient.post("/user/login", userData);
  return response.data;
};
