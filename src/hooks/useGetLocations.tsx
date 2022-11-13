import { gql, useQuery } from "@apollo/client";

export const getLocations = gql`
    query GetLocations($page:Int!){
        locations(page:$page){
            info {
                count
                pages
                next
                prev
            }
            results {
                id
                name
            }
        }
    }
`;

const useGetLocations = ({ page = 1 }) => {
    const { data, loading, error } = useQuery(getLocations, { variables: { page } });

    return [data?.locations, loading, error];
}

export default useGetLocations;