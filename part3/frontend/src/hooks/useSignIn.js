import { useMutation } from "@apollo/client"
import { SIGN_IN } from "../graphql/mutation"
import useAuthStorage from "./useAuthStorage"
import {useApolloClient} from '@apollo/client'

export const useSignIn =()=>{
    const [authenticate,result]= useMutation(SIGN_IN)
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();
    const signIn = async({username,password})=>{
       const {data}=await authenticate({
           variables:{
               credentials:{
                   username,password
               }
                    
              
           }
           
       }) 
        if(data.authenticate.accessToken){
            console.log('set access Token');
            const {authenticate:{accessToken}} = data;
            await authStorage.setAccessToken(accessToken);
            apolloClient.resetStore();
        }
    }
  
    // if(data){
    //   accessToken = data.authenticate.accessToken
    // }
   
    return [signIn,result]
}