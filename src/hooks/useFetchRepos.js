import octokit from "../octokit";
// import { useQuery } from 'react-query';

const useFetchRepos = async () => {
  try {
    const response = await octokit.request("GET /users/blaycoder/repos", {
      per_page: 100,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    // console.log(response.url);
    return response.data
  } catch (error) {
    return error;
  }
};

export {useFetchRepos};

