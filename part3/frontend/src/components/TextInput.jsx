import React from 'react'
import { TextInput as NativeTextInput,StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    default:{
        borderColor:'gray',
        borderWidth:1,
        borderRadius:5,
        padding:10,
        margin:10
    },
    error:{
        borderColor:'#d73a4a'
    }
  
})

const TextInput = ({error,...props}) => {
    const textInputStyles =[styles.default,error &&styles.error ]
    return (
        <NativeTextInput style={textInputStyles} {...props}/>
            
       
    )
}

export default TextInput
