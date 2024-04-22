import { useFetchRepo } from "../hooks/useFetchRepo";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { ProgressCircle } from "@adobe/react-spectrum";

function Repo() {
  const { name } = useParams(); // Destructure name from useParams

  const {
    isLoading,
    error,
    data: repo,
  // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useQuery("repo", () => useFetchRepo(name));

  const navigate = useNavigate();

  if (isLoading)
    return (
      <div className="flex justify-center">
        <ProgressCircle aria-label="Loading…" isIndeterminate />
      </div>
    );

  if (error) return <div>Error: {error.message}</div>;

  return (
    <section className="text-center mt-10 ">
      <div>
        <img className="flex justify-center" src={repo.owner.avatar_url} alt={repo.name} />
        <h2 className="text-lg font-bold">Name: {repo.name}</h2>
        <p>
          <h2 className="text-lg">
            URL:
            <a href={repo.html_url} target="_blank">
              {repo.html_url}
            </a>
          </h2>
        </p>
        <p>
          <h2 className="text-lg">Subscribers: {repo.subscribers_count}</h2>
        </p>
        <p>
          <h2 className="text-lg">Open Issues: {repo.open_issues_count}</h2>
        </p>
      </div>
      <div className="flex justify-center gap-3">
        <button
          className="bg-blue-700 text-white mt-6 hover:bg-blue-800"
          aria-label="go back"
          onClick={() => navigate(-1)}
        >
          Go back
        </button>
        <Link to="/">
          <button
            className="bg-blue-700 text-white mt-6 hover:bg-blue-800"
            aria-label="home"
          >
            Home
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Repo;
