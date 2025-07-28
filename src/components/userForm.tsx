import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { addUser } from "../slice/userSlice";
import type { RootState } from "../store/store";

type FormData = {
  name: string;
  email: string;
  age: number;
  country: string;
};

const UserForm: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.user.users);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    dispatch(addUser(data));
    reset();
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <label htmlFor="Name">Name</label>
        <input
          placeholder="Name"
          {...register("name", { required: "Name is required" })}
          className="w-full p-2 border rounded"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
        <label htmlFor="Name">Email</label>
        <input
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: "Invalid email",
            },
          })}
          className="w-full p-2 border rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
        <label htmlFor="Name">Age</label>
        <input
          placeholder="Age"
          {...register("age", {
            required: "Age is required",
            pattern: {
              value: /^[0-9]+$/,
              message: "Age must be a number",
            },
          })}
          className="w-full p-2 border rounded"
        />
        {errors.age && (
          <p className="text-red-500 text-sm">{errors.age.message}</p>
        )}
        <label htmlFor="Name">Country</label>
        <select
          {...register("country", { required: "Gender is required" })}
          className="w-full p-2 border rounded"
          defaultValue=""
        >
          <option value="" disabled>
            Select Country
          </option>
          <option value="Nepal">Nepal</option>
          <option value="India">India</option>
          <option value="U.S.A">U.S.A</option>
          <option value="Australia">Australia</option>
          <option value="England">England</option>
          <option value="Other">Other</option>
        </select>
        {errors.country && (
          <p className="text-red-500 text-sm">{errors.country.message}</p>
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>

      <div className="mt-6">
        <h2 className="text-lg font-bold">Submitted Users:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
          {users.map((user, index) => (
            <div
              key={index}
              className="w-full p-6 border rounded shadow bg-white"
            >
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Age:</strong> {user.age}
              </p>
              <p>
                <strong>Country:</strong> {user.country}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserForm;
