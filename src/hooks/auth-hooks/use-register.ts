import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../../services/auth";

export const useRegisterUser = () =>
  useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
