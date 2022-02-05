import React from 'react';
import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import { useMe } from '../hooks/useMe';
import { useApolloClient } from '@apollo/client';
import Text from './Text';
import useAuthStorage from '../hooks/useAuthStorage';

const styles = StyleSheet.create({
  container: {
  
    backgroundColor:'#24292e'
    // ...
  },
  signoutBtn:{
     
          padding:20,
        
  },
  signoutBtnText:{
    color:'white',
      fontSize:20
  }
});
const navList = [
  {buttonLabel:'Repositories',path:'/',orderInList:1},
  {buttonLabel:'Sign in',path:'/signin',orderInList:2},
  {buttonLabel:'BodyMassCal',path:'/bodyMassCal',orderInList:3},
]

const SignOutButton =()=>{
    const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const pressHandle =async()=>{
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
   
  }
  return (
    <Pressable onPress={pressHandle} style={styles.signoutBtn}>
      <Text style={styles.signoutBtnText} color={'textSecondary'} fontWeight={'bold'}>Sign out</Text>
    </Pressable>
  )
}

const AppBar = () => {
  const {data,error,loading} = useMe();
  console.log('me data',data);
  return <View style={styles.container}>
    <ScrollView horizontal>
         {navList.sort((a,b)=>a.orderInList-b.orderInList).map((nav,navIndx)=>{
           
           if(nav.path==='/signin' && data?.id){
             return <SignOutButton key={navIndx}/>
           }
          return <AppBarTab key={navIndx} buttonLabel={nav.buttonLabel} path={nav.path}/>
         })}
    </ScrollView>
   
     
      </View>;
};

export default AppBar;