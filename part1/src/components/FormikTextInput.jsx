import { useField } from 'formik'
import React from 'react'
import TextInput from './TextInput'
import Text from './Text'
import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color:'red'
  },
});
const FormikTextInput = ({name,...props}) => {
     //* value will return from field props for an <input />
     //* const {value} = field
     //* if it is not input, use meta to get value directly
    const [field,meta,helpers]= useField(name)
    const {value} = field;
    const {touched,error} = meta;
    const {setTouched,setValue} = helpers;

    const showError = touched && error;

    return (
        <>
           
           <TextInput 
                value={value}
                onChangeText={text=>setValue(text)}
                onBlur={()=>setTouched(true)}
                error={showError}
                {...props}
           /> 
           {showError && <Text style={styles.errorText}>{error}</Text>}
        </>
    )
}

export default FormikTextInput
