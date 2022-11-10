import { gql, useQuery } from "@apollo/client";

export const getCharacter = gql`
    query GetCharacter($id:Int!){
        character(id:$id){
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

const useGetCharacter = ({id}) => {
    const { data, loading, error } = useQuery(getCharacter, { });

    return [data?.character, loading, error];
}

export default useGetCharacter;