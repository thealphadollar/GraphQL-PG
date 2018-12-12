import {gql} from 'apollo-boost';

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`


const getBooks = gql`
    {
        books{
            id
            name
            genre
            author {
                name
            }
        }
    }
`

const getBook = gql`
    query($id: ID){
        book(id: $id){
            id
            name
            genre
            author{
                name
                age
                books {
                    name
                    id
                }
            }
        }
    }
`

const addBookMutation = gql`
    mutation ($name: String!, $genre: String!, $authorId: ID!){
        addBook (
            name: $name,
            genre: $genre,
            authorId: $authorId 
        ){
            name
            id
        }
    }
`

export {getAuthorsQuery, getBooks, addBookMutation, getBook};