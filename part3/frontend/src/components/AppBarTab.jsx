import React from 'react'
import { Pressable,StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
import Text from './Text'
const styles = StyleSheet.create({
    container:{
        display:'flex', 
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding:0
    },
    label:{
        color:'white',
          padding:20,
          fontSize:20
    }
})
const AppBarTab = ({buttonLabel,path}) => {
    return (
        <Link to={path} style={styles} >
            <Text style={styles.label} color={'textSecondary'} fontWeight={'bold'}>{buttonLabel}</Text>
        </Link>
    )
}

export default AppBarTab
