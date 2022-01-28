import { useMutation } from "@apollo/client"
import { SIGN_IN } from "../graphql/mutation"


export const useSignIn =()=>{
    const [authenticate,result]= useMutation(SIGN_IN)
     let accessToken
    const signIn = async({username,password})=>{
       await authenticate({
           variables:{
               credentials:{
                   username,password
               }
                    
              
           }
           
       }) 

    }
    // if(data){
    //   accessToken = data.authenticate.accessToken
    // }
   
    return [signIn,result]
}