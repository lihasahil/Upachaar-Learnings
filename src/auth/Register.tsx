import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../schemas/zodSchemas";
import { z } from "zod";

type RegisterFormInputs = z.infer<typeof registerSchema>;

export const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormInputs) => {
    console.log("Registration data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
      <input
        {...register("name")}
        placeholder="Name"
        className="input focus border-2 border-gray-600 rounded-md p-2 w-sm"
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <input
        {...register("email")}
        placeholder="Email"
        className="input focus border-2 border-gray-600 rounded-md p-2 w-sm"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <input
        {...register("password")}
        type="password"
        placeholder="Password"
        className="input focus border-2 border-gray-600 rounded-md p-2 w-sm"
      />
      {errors.password && (
        <p className="text-red-500">{errors.password.message}</p>
      )}

      <input
        {...register("confirmPassword")}
        type="password"
        placeholder="Confirm Password"
        className="input focus border-2 border-gray-600 rounded-md p-2 w-sm"
      />
      {errors.confirmPassword && (
        <p className="text-red-500">{errors.confirmPassword.message}</p>
      )}

      <button
        type="submit"
        className="flex justify-center bg-green-600 rounded-2xl w-xs p-2 align-center"
      >
        Register
      </button>
    </form>
  );
};
