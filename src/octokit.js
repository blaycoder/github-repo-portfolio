
import { Octokit} from "@octokit/core"
// import vitePluginRequire from "vite-plugin-require";
const token_github = import.meta.env.VITE_REACT_APP_GITHUB_API;

const octokit = new Octokit({
  auth: token_github,
});


export default octokit;


