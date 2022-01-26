import { useQuery } from "@apollo/client";
import { useMemo } from "react";

import { GET_REPOSITORIES } from "../graphql/queries";

export const useRepositories = ()=>{
    const {data,loading,error} = useQuery(GET_REPOSITORIES,{
        fetchPolicy:'cache-and-network'
    })
    
    const repositories = useMemo(()=>{
        if(data){
            return  data.repositories.edges.map(({node:item})=>({
                id: item.id,
                fullName: item.fullName,
                description: item.description,
                language: item.language,
                forksCount: item.forksCount,
                stargazersCount: item.stargazersCount,
                ratingAverage: item.ratingAverage,
                reviewCount: item.reviewCount,
                ownerAvatarUrl:item.ownerAvatarUrl
            }))
        }
        return null
    },[data])

    return {data:repositories,loading,error}
}