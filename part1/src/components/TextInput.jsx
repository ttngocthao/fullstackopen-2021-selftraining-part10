import React from 'react'
import { TextInput as NativeTextInput,StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    default:{
        borderColor:'gray',
        borderWidth:1,
        borderRadius:5,
        padding:10,
        margin:10
    }
  
})

const TextInput = ({...props}) => {
    const textInputStyles =[styles.default]
    return (
        <NativeTextInput style={textInputStyles} {...props}/>
            
       
    )
}

export default TextInput
