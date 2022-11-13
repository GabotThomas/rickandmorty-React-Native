import { gql, useQuery } from "@apollo/client";

export const getCharacters = gql`
    query GetCharacters($page:Int!){
        characters(page:$page){
            info {
                count
                pages
                next
                prev
            }
            results {
                id
                name
                image
                status
            }
        }
    }
`;

const useGetCharacters = ({ page = 1 }) => {
    const { data, loading, error } = useQuery(getCharacters, { variables: { page } });

    return [data?.characters, loading, error];
}

export default useGetCharacters;