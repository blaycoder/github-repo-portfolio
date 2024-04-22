import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "@adobe/react-spectrum";
import { lightTheme } from "@adobe/react-spectrum";
import { ProgressCircle } from "@adobe/react-spectrum";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { lazy, Suspense } from "react";
import PageNotFound from "./pages/PageNotFound";
import TestRepo from "./components/TestRepo";



const queryClient = new QueryClient();
const Home = lazy(() => import("./pages/Home"));
const Repo = lazy(() => import("./pages/Repo"));
const RepoModal = lazy(() => import("./components/RepoModal"));
const Repos = lazy(() => import("./components/Repos"));

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider defaultColorScheme="light" theme={lightTheme}>
          <NavBar />
          <Suspense fallback={<ProgressCircle />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/repos" element={<Repos />} />

              <Route path="/repos">
                <Route path=":name" element={<Repo />} />
              </Route>
              
              <Route path="/repomodal" element={<RepoModal />} />
              <Route path="/errorboundary" element={<TestRepo/>}/>
              <Route path="*" element={<PageNotFound/>}/>
            </Routes>
          </Suspense>
          {/* <Pagination/> */}
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
