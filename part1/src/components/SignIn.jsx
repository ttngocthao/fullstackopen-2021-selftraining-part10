import React from 'react'
import Text from './Text'
import {Formik,useField} from 'formik'
import FormikTextInput from './FormikTextInput'
import Button from './Button'
import { View } from 'react-native'

const SignIn = () => {
    const initialValues={
        username:'',
        password:''
    }
    const onSubmit=(values)=>{
        console.log('submit',values)
    }
    return (
        <View>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
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
