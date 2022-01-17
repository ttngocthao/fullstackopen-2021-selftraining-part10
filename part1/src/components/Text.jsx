import React from 'react'
import {Text as NativeText,StyleSheet, Platform} from 'react-native'
import theme from '../theme'

const styles =StyleSheet.create({
    text:{
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: Platform.select({
            android:'Roboto',
            ios:'Arial',
            default:'System'
        }),
        fontWeight: theme.fontWeights.normal,
    },
     colorTextSecondary: {
        color: theme.colors.textSecondary,
    },
    colorPrimary: {
        color: theme.colors.primary,
    },
    fontSizeSubheading: {
        fontSize: theme.fontSizes.subheading,
    },
    fontSizeHeading: {
        fontSize: theme.fontSizes.heading,
    },
    fontWeightBold: {
        fontWeight: theme.fontWeights.bold,
    },
})

const Text = ({color,fontSize,fontWeight,style,...props}) => {
   const textStyles =[
       styles.text,
       color === 'textSecondary' && styles.colorTextSecondary,
       color === 'primary' && styles.colorPrimary,
       fontSize ==='subheading' && styles.fontSizeSubheading,
       fontSize === 'heading' && styles.fontSizeHeading,
       fontWeight === 'bold' && styles.fontWeightBold,
       style
   ]
   
    return (

        <NativeText style={textStyles} {...props}/>           
       
    )
}

export default Text
