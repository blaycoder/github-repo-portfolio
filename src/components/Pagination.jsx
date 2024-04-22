import { useState, useEffect } from "react";
import octokit from "../octokit";

function Pagination() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const PER_PAGE = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await octokit.request(
          `GET /user/repos?user=blaycoder&per_page=${PER_PAGE}&page=${page}`,
          {
            headers: {
              "X-GitHub-Api-Version": "2022-11-28",
            },
          }
        );

        const parsedData = parseData(response.data);
        setData((prevData) => [...prevData, ...parsedData]);
        setLoading(false);
      } catch (error) {
        setError(error)
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page]); // Re-run effect when `page` changes

  if (loading) {
    return <>Loading...</>;
  }

  if (!loading && error) {
    return <>Error:{error.message}</>;
  }

  function parseData(data) {
    if (Array.isArray(data)) {
      return data;
    }

    if (!data) {
      return [];
    }

    delete data.incomplete_results;
    delete data.repository_selection;
    delete data.total_count;

    const namespaceKey = Object.keys(data)[0];
    return data[namespaceKey];
  }

  const handleNext = (event) => {
    event.preventDefault();
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrev = (event) => {
    event.preventDefault();
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <>
      <ul
        role="list"
        className="divide-y divide-gray-100 flex flex-col justify-center content-center"
      >
        {data.map((repo) => (
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
      <div className="flex justify-center gap-3">
        <button onClick={handlePrev} disabled={page <= 1}>
          Prev
        </button>
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  );
}

export default Pagination;
