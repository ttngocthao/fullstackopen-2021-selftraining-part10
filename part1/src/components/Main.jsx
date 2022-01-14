import React from 'react'
import  Constants from 'expo-constants'
import {StyleSheet,View} from 'react-native'
import Text from './Text'
import ReposList from './ReposList'
import AppBar from './AppBar'
import FlexBox from './FlexBox'
import { Redirect, Route, Switch } from 'react-router-native'
import SignIn from './SignIn'
const styles = StyleSheet.create({
    container:{
        marginTop:Constants.statusBarHeight,
        flexGrow:1,
        flexShrink:1,
        backgroundColor:'#e1e4e8'
    },
   
  
})



const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar/>
           
                <Route path={'/signin'} exact component={SignIn}/>
                    
                <Route path={'/'} exact component={ReposList}/>
                    
        </View>
    )
}

export default Main
