import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import { loginUser } from "../../services/auth";
interface User {
  _id: string;
  email: string;
  name: string;
  role: "admin" | "user";
}

interface LoginResponse {
  token: string;
  user: User;
}

interface LoginVariables {
  email: string;
  password: string;
}

export const useLoginUser = (
  options?: UseMutationOptions<LoginResponse, Error, LoginVariables>
) =>
  useMutation<LoginResponse, Error, LoginVariables>({
    mutationFn: loginUser,
    onSuccess: (data, variables, context) => {
      // Token NOT stored here anymore

      // Call any user-provided onSuccess callback
      options?.onSuccess?.(data, variables, context);
    },
    onError: (error, variables, context) => {
      // eslint-disable-next-line no-console
      console.error("Login failed:", error.message);
      options?.onError?.(error, variables, context);
    },
    ...options,
  });
