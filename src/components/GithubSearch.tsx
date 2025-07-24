import React, { useState } from "react";
import { useFetch } from "../hooks/custom-api-fetch";

interface GitHubUser {
  login: string;
  avatar_url: string;
  name: string;
  public_repos: number;
  followers: number;
  following: number;
  bio: string;
  html_url: string;
}

export const GitHubUserSearch: React.FC = () => {
  const [username, setUsername] = useState("octocat");
  const [search, setSearch] = useState("octocat");

  const { data, loading, error } = useFetch<GitHubUser>(
    `https://api.github.com/users/${search}`
  );

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) throw error;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <input
        type="text"
        className="w-full p-2 border rounded mb-4"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button
        onClick={() => setSearch(username)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Search
      </button>

      {data && (
        <div className="text-center mt-6">
          <img
            src={data.avatar_url}
            alt={data.login}
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold">{data.name}</h2>
          <p className="text-gray-600">@{data.login}</p>
          <p className="text-sm my-2">{data.bio}</p>
          <div className="flex justify-around mt-4 text-sm">
            <span>Repos: {data.public_repos}</span>
            <span>Followers: {data.followers}</span>
            <span>Following: {data.following}</span>
          </div>
          <a
            href={data.html_url}
            className="inline-block mt-4 text-blue-500 underline"
            target="_blank"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};
