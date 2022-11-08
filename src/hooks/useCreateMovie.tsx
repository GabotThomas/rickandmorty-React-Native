import { gql, useMutation, useQuery } from "@apollo/client";
import { getEpisodes } from "./useGetEpisodes";

const createMovieMutation = gql`
    mutation CreateMovie($category:String!, $title:String!, $year:Int!) {
        createMovie(category: $category,title: $title,year: $year){
            picture
            id
        }
    }
`;

const useCreateMovie = (onCompleted: () => void) => {
    const [createMovie, { data, loading, error }] = useMutation(createMovieMutation, {
        'refetchQueries': [getEpisodes],
        onCompleted,
    });
    return {
        createMovie,
        data,
        loading,
        error
    };
}

export default useCreateMovie;