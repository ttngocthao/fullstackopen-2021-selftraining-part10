import React from 'react';
import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
  
    backgroundColor:'#24292e'
    // ...
  },
  // ...
});
const navList = [
  {buttonLabel:'Repositories',path:'/',orderInList:1},
  {buttonLabel:'Sign in',path:'/signin',orderInList:2},
  {buttonLabel:'BodyMassCal',path:'/bodyMassCal',orderInList:3},
]
const AppBar = () => {
  return <View style={styles.container}>
    <ScrollView horizontal>
         {navList.sort((a,b)=>a.orderInList-b.orderInList).map((nav,navIndx)=><AppBarTab key={navIndx} buttonLabel={nav.buttonLabel} path={nav.path}/>)}
    </ScrollView>
   
     
      </View>;
};

export default AppBar;