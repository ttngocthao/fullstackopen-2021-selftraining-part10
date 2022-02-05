import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
    query Repositories {
        repositories {
            totalCount
            edges {
                node {
                    fullName
                    ratingAverage
                    reviewCount
                    stargazersCount
                    forksCount
                    ownerAvatarUrl
                    description
                    language
                    id
                }
            }
        }
    }
`
export const GET_ME = gql`
    query Me {
        me {
            username
            reviewCount
            id
        }
    }

`