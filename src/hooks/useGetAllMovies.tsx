import { gql, useQuery } from "@apollo/client";

export const getAllMoviesQuery = gql`
    query GetAllMovies {
        getAllMovies {
            title
            picture
        }
    }
`;

const useGetAllMovies = () => {
    const { data, loading, error } = useQuery(getAllMoviesQuery);

    return { data, loading, error };
}

export default useGetAllMovies;