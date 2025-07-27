// import React from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { resetPasswordSchema } from "../schemas/zodSchemas";
// import { z } from "zod";

// type ResetPasswordInputs = z.infer<typeof resetPasswordSchema>;

// export const ResetPasswordForm: React.FC = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<ResetPasswordInputs>({
//     resolver: zodResolver(resetPasswordSchema),
//   });

//   const onSubmit = (data: ResetPasswordInputs) => {
//     console.log("Reset password for:", data.email);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//       <input
//         {...register("email")}
//         placeholder="Enter your email"
//         className="input focus border-2 border-gray-600 rounded-md p-2 w-sm"
//       />
//       {errors.email && <p className="text-red-500">{errors.email.message}</p>}

//       <button
//         type="submit"
//         className="flex justify-center bg-green-600 rounded-2xl w-xs p-2 align-center"
//       >
//         Send Reset Link
//       </button>
//     </form>
//   );
// };
