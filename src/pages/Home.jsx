import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Home(){
    return (
      <section>
        <Helmet>
          <title>Github Repo Portfolio</title>
          <meta
            name="description"
            content="Github Portfolio"
          />
        </Helmet>
        <div className="text-center mt-10">
          <h2 className="text-xl font-bold text-indigo-700">
            WELCOME TO MY GITHUB REPOSITORIES
          </h2>
          <p className="text-lg p-5">
            {" "}
            You can fetch my github repositories by clicking the button below{" "}
          </p>
          <Link to="/repos">
            <button
              className="bg-blue-700 text-white hover:bg-blue-800"
              aria-label="fetch repositories"
            >
              Fetch Repositories
            </button>
          </Link>
        </div>
      </section>
    );
}

export default Home;