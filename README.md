# GraphQL-PG

A repository to learn about both - server and client side implementation of graphQL.

## Tech-Stack

I'll be following the [GraphQL tutorial](https://www.youtube.com/watch?v=Y0lDGjwRYKw&list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f&index=1) by [The Net Ninja](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg).

The following tech-stack is used in the entire program:

- Backend
  - NodeJS with express
  - MongoDB (remote DB based in mLab)
- Frontend
  - ReactJS with Express and Apollo

I will be building a service that would show details about books using graph queries from the frontend.

## Running

The backend should be run on port 4000 by following the below instructions:

`#install nodejs and npm`
`cd /path/to/graphql-PG/backend`
`npm install`
`npm start`

Keeping the backend running, frontend should be run using the following commands:

`cd /path/to/graphql-PG/frontend`
`npm install`
`npm start`

The webpage will be opened up in the browser.

## Queries

The following graphQL queries can be made (with GET) to backend.

#### To fetch all books

```graphql
{
    books{
        id
        name
        genre
        author{
            AUTHOR_NODE
        }
    }
}
```

#### To fetch all authors

```graphql
{
    authors{
        id
        name
        age
        books{
            BOOK_NODE
        }
    }
}
```

#### To fetch book with id=$ID

```graphql
{
    book(id:$ID){
        id
        name
        author{
            AUTHOR_NODE
        }
    }
}
```

#### To fetch author with id=$ID

```graphql
{
    author(id:$ID){
        id
        name
        age
        books{
            BOOK_NODE
        }
    }
}
```



## Why GraphQL?

If you are a REST fan and would like to know why GraphQL is better, here are the reasons: 

https://www.robinwieruch.de/why-graphql-advantages-disadvantages-alternatives/
