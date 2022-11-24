import { gql, useQuery } from "@apollo/client";

export const getCharacters = gql`
    query GetCharacters($page:Int!, $filter:FilterCharacter){
        characters(page:$page, filter:$filter){
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

const useGetCharacters = ({ page = 1, filter }) => {
    const { data, loading, error } = useQuery(getCharacters, { variables: { page, filter } });

    return [data?.characters, loading, error];
}

export default useGetCharacters;