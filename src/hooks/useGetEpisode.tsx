import { gql, useQuery } from "@apollo/client";

export const getEpisode = gql`
    query GetEpisode($id:ID!){
        episode(id:$id){
            id
            name
            air_date
        }
    }
`;

const useGetEpisode = (variables: any) => {
    const { data, loading, error } = useQuery(getEpisode, { variables });
    return [data?.episode, loading, error];
}

export default useGetEpisode;