import React from 'react'
import Text from './Text'
import {Formik} from 'formik'
import FormikTextInput from './FormikTextInput'
import Button from './Button'
import { View } from 'react-native'
import * as yup from 'yup'

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

const SignIn = () => {
    const initialValues={
        username:'',
        password:''
    }
    const onSubmit=(values)=>{
        console.log('submit',values)
    }
    return (
        <View style={{padding:10}}>
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
}

export default SignIn
