# GraphQL

GraphQL is a **query language for APIs** and a runtime for executing those queries.

## Benefits

- Fetch only what you need
- Strongly typed schema
- Works well with frontend frameworks

## Example Query

```graphql
query {
  user(id: "123") {
    name
    email
  }
}