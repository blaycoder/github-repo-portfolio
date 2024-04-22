import { SearchField } from "@adobe/react-spectrum";
import { useState } from "react";
import { useFetchRepos } from "../hooks/useFetchRepos";
import { useQuery } from "react-query";

export default function Search() {
  const [q, setQ] = useState("");

  const {
    data: repos = [],
    isLoading,
    isError,
  } = useQuery("repos", useFetchRepos);

  const filteredRepos = (repos ?? []).filter((repo) =>
    repo.name.toLowerCase().includes(q.toLowerCase())
  );

  const handleSearchChange = (value) => {
    setQ(value);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching repositories.</p>;

  return (
    <div>
      <div className="flex justify-center mt-5">
        <SearchField
          aria-label="Search"
          value={q}
          onChange={handleSearchChange}
        />
      </div>
      {filteredRepos.length === 0 ? (
        <span className="text-center">No repository of such name</span>
      ) : (
        <ul className="divide-y divide-gray-100 flex flex-col justify-center content-center">
          {filteredRepos.map((repo) => (
            <li
              key={repo.id}
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5 m-5 rounded-xl"
            >
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl self-center flex justify-between py-5 hover:underline hover:text-white"
              >
                {repo.name}
              </a>
              <div className="line-clamp-1 text-slate-300">
                {repo.description || "No description"}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
