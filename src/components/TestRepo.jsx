import { Link } from "react-router-dom";

function TestRepo(){
      const { isLoading, error, data } = useQuery("repos", useFetchRepos);
    return(
        <>
        <p>THIS IS TEST TO CHECK MODAL CLASS</p>
        </>
        
    )
}

export default TestRepo;