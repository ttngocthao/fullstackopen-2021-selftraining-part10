import React ,{useState} from 'react'
import Text from './Text'
import {Formik} from 'formik'
import FormikTextInput from './FormikTextInput'
import Button from './Button'
import { View } from 'react-native'
import * as yup from 'yup'
import { useSignIn } from '../hooks/useSignIn'

import {Redirect,withRouter} from 'react-router-native'

const validationSchema =yup.object().shape({
    username: yup
    .string()
    .min(3,'Username must be 3 character long')
    .required('Username is required'),
    password: yup
    .string()
    .min(6,'Password must be 6 character long')
    .required('Password is required'),
})

const SignIn = withRouter(({history}) => {
    const [signIn,result] = useSignIn();
    const [waiting,setWaiting] = useState(false);
    const initialValues={
        username:'',
        password:''
    }
    const onSubmit=async(values)=>{
        const {username,password}= values;
        try {
           
            setWaiting(true)
            await signIn({username,password})
            history.push("/")
        
            
        } catch (error) {
            console.log(error)
        }
       
    }
    return (
        <View style={{padding:10}}>
            <Text>
                {waiting ? 'Waiting please': ''}
            </Text>
            <Formik 
                validationSchema={validationSchema}
                initialValues={initialValues} 
                onSubmit={onSubmit}>
                    {({handleSubmit})=><>
                    <FormikTextInput name='username' placeholder='Username'/>
                        <FormikTextInput secureTextEntry={true} name='password' placeholder='Password'/>
                        <Button label='Sign in' onPress={handleSubmit}/>
                    </>}             
            </Formik>  
        </View>
      
    )
})

export default SignIn
