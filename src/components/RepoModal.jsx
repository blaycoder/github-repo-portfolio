import useCreateRepo from "../hooks/useCreateRepo";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import Repos from "./Repos";

const RepoModal = () => {
  const { mutate, isLoading, error } = useCreateRepo();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();

  async function handleCreateRepo(data) {
    isLoading && <div>Creating repository...</div>;
    {
      error && <div>Error: {error.message}</div>;
    }
    await mutate(data);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const description = e.target.elements.description.value;
    await handleCreateRepo(name, description);
    setTimeout(() => {
      setFormSubmitted(true);
      //  if (formSubmitted) {
      //    <p>Repository created successfully</p>;
      //    setTimeout(() => {
      //      <Repos />;
      //    }, 1000);
      //  }
      alert("Repository created successfully");
      // navigate('./repos')
      // <Repos/>
    }, 1000);
  };

 

  return (
    <div className="flex justify-center">
      {!formSubmitted ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center gap-2 max-w-64"
        >
          <label htmlFor="name">Repository Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="border-1 border-emerald-300 p-2"
          />
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            id="description"
            name="description"
            required
            className="border-1 border-emerald-300 p-3"
          />
          <button type="submit" className="bg-slate-950 text-white">
            Create
          </button>
        </form>
      ) : (
        <div>
          <p>Repository created successfully</p>
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
        </div>
      )}
    </div>
  );
};

export default RepoModal;
