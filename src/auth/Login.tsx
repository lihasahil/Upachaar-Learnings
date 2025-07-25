import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schemas/zodSchemas";
import { z } from "zod";
import { Link } from "react-router";

type LoginFormInputs = z.infer<typeof loginSchema>;

export const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    console.log("Login data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
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
        className="input border-2 border-gray-600 rounded-md p-2 w-sm"
      />
      {errors.password && (
        <p className="text-red-500">{errors.password.message}</p>
      )}
      <Link to="/reset-password" className="text-xs">Reset Password</Link>
      <button
        type="submit"
        className="flex justify-center bg-green-600 rounded-2xl w-xs p-2 align-center"
      >
        Login
      </button>
    </form>
  );
};
