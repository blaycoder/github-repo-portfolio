import { useFetchRepos } from "../hooks/useFetchRepos";
import { useQuery } from "react-query";
import { ProgressCircle } from "@adobe/react-spectrum";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { SearchField } from "@adobe/react-spectrum";

// import Search from "./Search";
// import Pagination from "./Pagination";
// import {Link} from "react-aria-components"

function Repos() {
  const { isLoading, error, data } = useQuery("repos", useFetchRepos);
  const [query, setQuery] = useState("");

  const filteredRepos = (data ?? []).filter((repo) =>
    repo.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearchChange = (value) => {
    setQuery(value);
  };

  if (isLoading)
    return (
      <div className="flex justify-center">
        <ProgressCircle aria-label="Loading…" isIndeterminate />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;
  return (
    <section>
      <div className="flex justify-center mt-5">
        <SearchField
          aria-label="Search"
          value={query}
          onChange={handleSearchChange}
        />
      </div>

     {filteredRepos.length === 0 ?( 
       <span className="text-center">No repository of such name</span>
     ):
     (
       <div>
        <ul
          role="list"
          className=" divide-y divide-gray-100 flex flex-col justify-center content-center"
          >
          {data.map((repo) => (
            // eslint-disable-next-line react/jsx-key
            <li
            key={repo.id}
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5 m-5 rounded-xl"
            >
              <Link
                to={`/repos/${repo.name}`}
                className="text-white text-xl self-center flex justify-between py-5 hover:underline hover:text-white"
                >
                {repo.name}
              </Link>
              <div className="line-clamp-1 text-slate-300">
                {repo.description || "No description"}{" "}
              </div>
            </li>
          ))}
        </ul>
        <Outlet />
      </div>
        )} 
    </section>
  );
}

export default Repos;
