import octokit from "../octokit";
// import { useQuery } from 'react-query';

// const token = import.meta.env.VITE_REACT_APP_GITHUB_API;
const useFetchRepos = async () => {
  try {
    const response = await octokit.request("GET /users/user/repos", {
      user: "blaycoder",
      per_page: 100,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
        // Authorization: `Bearer ${token}`
      },
    });
    // console.log(response.url);
    return response.url, response.data
  } catch (error) {
    return error;
  }
};

export {useFetchRepos};

