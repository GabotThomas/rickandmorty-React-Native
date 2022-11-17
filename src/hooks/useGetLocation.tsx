import { gql, useQuery } from "@apollo/client";

export const getLocation = gql`
    query GetLocation($id:ID!){
        location(id:$id){
            id
            name
            type
            dimension
            residents {
                name
            }
            created
        }
    }
`;

const useGetLocation = (variables: any) => {
    const { data, loading, error } = useQuery(getLocation, { variables });
    return [data?.episode, loading, error];
}

export default useGetLocation;