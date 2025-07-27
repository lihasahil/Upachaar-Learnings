import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../services/user-detail";

interface Address {
  city?: string;
  district?: string;
  state?: string;
  ward?: string;
}

interface User {
  _id: string;
  name: string;
  email: string;
  profile_pic?: string;
  cover_photo?: string;
  cover_photo_id?: string;
  pdf?: Array<string>;
  address?: Address;
  role: "user" | "admin";
  createdAt: string;
  updatedAt: string;
}

interface FetchUsersResponse {
  message: string;
  totalUsers: number;
  users: Array<User>;
}

export const useFetchUsers = () =>
  useQuery<FetchUsersResponse, Error>({
    queryKey: ["admin-users"],
    queryFn: fetchUser,
  });
