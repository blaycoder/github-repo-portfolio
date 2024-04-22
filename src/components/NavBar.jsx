import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@adobe/react-spectrum";
import logo from "../images/github-logo.png";

const NavBar = () => {
  return (
    <nav className="p-5 bg-slate-100">
      <ul className="flex flex-col sm:flex-row sm:justify-between">
        <Link to="/">
          <li className=" flex justify-center sm:gap-3 ">
            <img src={logo} alt="github logo" className="w-10" />
            <h2 className="self-center pl-3 text-fuchsia-800 text-3xl font-medium font-monospace">
              AY-GITHUB
            </h2>
          </li>
        </Link>

        <ButtonGroup UNSAFE_className="gap-3">
          <div className="flex justify-center mt-5 sm:align-center gap-5">
            <Link to="/repomodal">
              <li>
                <Button
                  variant="primary"
                  //   onPressUp={handleCreateRepoClick}
                  // onClick={handleOpenModal}
                  UNSAFE_className="cursor-pointer rounded-lg hover:bg-blue-600 hover:text-white"
                  aria-label="Create repository"
                >
                  Create Repository
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              </li>
            </Link>

            <Link to="/errorboundary">
              <li>
                <Button
                  variant="primary"
                  UNSAFE_className="cursor-pointer rounded-lg hover:bg-blue-600 hover:text-white"
                  aria-label="Create repository"
                >
                  Test Error Boundary
                </Button>
              </li>
            </Link>

          </div>
        </ButtonGroup>
      </ul>
    </nav>
  );
};

export default NavBar;
