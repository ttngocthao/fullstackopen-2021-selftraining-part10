import React from 'react'
import { Pressable ,StyleSheet} from 'react-native'
import Text from './Text'
import theme from '../theme'

const styles=StyleSheet.create({
    default:{
        backgroundColor: theme.colors.primary,
        padding:10,
        margin:10,
        borderRadius:5,
        alignItems:'center'
    },
    defaultText:{
        color:'white',
        alignItems:'center'
    }
})

const Button = ({label,...props}) => {
    const buttonStyles =[styles.default]
    const textStyles =[styles.defaultText]
    return (
        <Pressable style={buttonStyles} {...props}>
           <Text fontWeight={'bold'} style={textStyles}>{label}</Text> 
        </Pressable>
    )
}

export default Button
