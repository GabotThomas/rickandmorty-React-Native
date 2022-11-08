import { gql, useQuery } from "@apollo/client";

export const getEpisodes = gql`
    query GetEpisodes($page:Int!){
        episodes(page:$page){
            info {
                count
                pages
                next
                prev
            }
            results {
                id
                name
                air_date
                episode
            }
        }
    }
`;

const useGetEpisodes = ({ page = 1 }) => {
    const { data, loading, error } = useQuery(getEpisodes, { variables: { page } });

    return [data?.episodes, loading, error];
}

export default useGetEpisodes;