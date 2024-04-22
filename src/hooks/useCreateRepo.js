import { useMutation } from "react-query";
import octokit from "../octokit";
// import { useQuery } from 'react-query';

const useCreateRepo = () => {
  return useMutation(async (name, description) => {
    try {
      const response = await octokit.request("POST /user/repos", {
        user: "blaycoder",
        name: name,
        description: description,
        private: false,
        has_issues: true,
        has_projects: true,
        has_wiki: true,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
      return response;
    } catch (error) {
      if (error && error.response && error.response.status === 422) {
        alert("There is already a repository with the same name ");
      }
      return error;
    }
  });
};

export default useCreateRepo;
