
import { Octokit} from "@octokit/core"
// import vitePluginRequire from "vite-plugin-require";
const token = import.meta.env.VITE_REACT_APP_GITHUB_API;

const octokit = new Octokit({
  auth: token,
});


export default octokit;


