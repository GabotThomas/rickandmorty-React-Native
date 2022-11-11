import { gql, useQuery } from "@apollo/client";

export const getCharacter = gql`
    query GetCharacter($id:ID!){
        character(id:$id){
            id
            name
            species
            type
            status
            location {
                id
                name
            }
            origin {
                id
                name
            }
            gender
        }
    }
`;

const useGetCharacter = (variables: any) => {
    const { data, loading, error } = useQuery(getCharacter, { variables });
    return [data?.character, loading, error];
}

export default useGetCharacter;