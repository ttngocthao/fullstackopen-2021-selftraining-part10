
import { useQuery } from "@apollo/client";
import { GET_ME } from "../graphql/queries";
import useAuthStorage from "./useAuthStorage";

export const useMe = ()=>{
    const {data,loading,error} = useQuery(GET_ME)
    let me 
    if(data){
       me =  {username:data.me?.username,id:data.me?.id}
        
    }else{
        console.log('error',error)
    }

    return {data:me,loading,error}
}