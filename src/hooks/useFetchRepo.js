import octokit from "../octokit";
// import { useQuery } from 'react-query';

const useFetchRepo = async (name) => {
 
  try {
    const response = await octokit.request('GET /repos/{owner}/{repo}', {
      owner: "blaycoder",
      repo: name,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export { useFetchRepo };
