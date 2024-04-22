import octokit from "../octokit";
// import { useQuery } from 'react-query';

const fetchRepos = async (username) => {
  try {
    const response = await octokit.request(`GET /users/${username}/repos`, {
      per_page: 10, // Adjust per_page as needed to fetch multiple repositories
      headers: {
       "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    // Extract relevant data from response
    const repos = response.data.map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
    }));

    return repos; // Return array of repositories
  } catch (error) {
    console.error("Error fetching repositories:", error);
    throw error; // Rethrow error to be handled by the calling component
  }
};

export {fetchRepos}
