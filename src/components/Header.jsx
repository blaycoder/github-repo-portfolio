import { useState } from "react";
import { Button, ButtonGroup } from "@adobe/react-spectrum";
import CreateRepoModal from "./RepoModal";
import { useDisclosure } from "@chakra-ui/react";
// import Search from "./Search";

function Header() {
  const { onOpen } = useDisclosure();
  const [showCreateRepoComponent, setCreateRepoComponent] = useState(false);


  const handleCreateRepoClick = () => {
    setCreateRepoComponent(true);
    onOpen();
  };

  return (
    <div>
      <header>
        <nav className="p-5 bg-slate-100">
          <ul className="flex justify-between">
            <li className="flex gap-3 ">
              <img
                src="./src/images/github-logo.png"
                alt="github logo"
                className="w-10"
              />
              <h2 className="self-center text-fuchsia-800 text-3xl font-medium font-monospace">
                AY-GITHUB
              </h2>
            </li>
            <li>
              <div className="flex align-center gap-5">
                <ButtonGroup UNSAFE_className="gap-3">
                  <Button
                    variant="primary"
                    onPressUp={handleCreateRepoClick}
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
                </ButtonGroup>
              </div>
            </li>
          </ul>
        </nav>
      </header>
      {showCreateRepoComponent && <CreateRepoModal />}
      {/* <Search /> */}
    </div>
  );
}

export default Header;
