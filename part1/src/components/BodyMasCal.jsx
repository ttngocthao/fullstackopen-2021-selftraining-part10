import { Formik, useField } from 'formik';
import React from 'react'
import { Pressable, View ,Text, Alert} from 'react-native';
import Button from './Button';
import FormikTextInput from './FormikTextInput';
import TextInput from './TextInput';
const initialValues ={
    mass:'',
    height:''
}

const getBodyMassIndex = (mass,height)=>{
    return Math.round(mass / Math.pow(height, 2));
}

const BodyMassIndexForm = ({onPress})=>{
    

 return (
        <View>

            <FormikTextInput
                placeholder='Weight (kg)'
                name='mass'
            />
            <FormikTextInput
                placeholder='Height (m)'
             name='height'
            />
            <Button label={'Calculate'} onPress={onPress}/>
            
        </View>
    )
}

const BodyMasCal = () => {
    const onSubmit = values =>{
        const mass = parseFloat(values.mass);
        const height = parseFloat(values.height);
        if(!isNaN(mass) && !isNaN(height) && height!==0 ){
            Alert.alert(`Mass:${mass},Height:${height}, Your body mass index is:${getBodyMassIndex(mass,height)}`)
        }
    }
    return (
        <View>
           <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({handleSubmit})=><BodyMassIndexForm onPress={handleSubmit}/>}
            </Formik>  
        </View>
       
    )
}

export default BodyMasCal
