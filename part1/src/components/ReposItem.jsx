import React from 'react'
import{View,Image, StyleSheet} from 'react-native'
import Text from './Text'
import FlexBox from './FlexBox'
import theme from '../theme'
const styles = StyleSheet.create({
    container:{
        padding:20,
        backgroundColor:'white'
    },
    avatar:{
        borderRadius:5,
        width:70,
        height:70
    },
    languageText:{
         color:'white',
    },
    languageWrap:{
        backgroundColor:theme.colors.primary,
        alignSelf:'flex-start',
        padding:8,
        flexGrow:0,
        width:'auto',
        marginTop:10,
        borderRadius:4
    },
    ratingWrap:{
        paddingTop:20,
        justifyContent:'space-around'
    }
    })

const displayThousand =(number)=>{
    if(number>1000){
        return `${(number/1000).toFixed(1)}k`
    }
    return number
}
const AvatarImage = ({...props})=>{
    
    return <Image  accessibilityLabel={props.alt} style={styles.avatar} {...props}/>
}
const Rating = ({label,count})=>{
    return ( 
        <View style={{alignItems:'center'}}>
            <Text fontWeight={'bold'} fontSize={'subHeading'} color={'textPrimary'}>{displayThousand(count)}</Text>
            <Text style={{paddingTop:5}} color={'textSecondary'}>{label}</Text>
        </View>
    )
}
const ReposItem = ({item}) => {
    return (
        <View style={styles.container}>
            <FlexBox direction={'row'}>
                <AvatarImage source={{uri:item.ownerAvatarUrl}} alt={item.fullName}/>
                <View style={{paddingLeft:20}}>
                    <Text style={{paddingBottom:5}} color={'primary'} fontSize={'heading'} fontWeight={'bold'}>Full name: {item.fullName}</Text>  
                    <View  style={{flexDirection:'row'}}>
                        <Text style={{flex: 1, flexWrap: 'wrap'}} color={'textSecondary'}>Description: {item.description}</Text>
                   
                    </View>
                    <View  style={styles.languageWrap}>
                        <Text style={styles.languageText} >{item.language}</Text>
                    </View>
                </View>
            </FlexBox>
             <FlexBox  style={styles.ratingWrap} direction={'row'}>
                 
                
                 <Rating count={item.stargazersCount} label={'Stars'}/>
                 <Rating count={item.forksCount} label={'Forks'}/>
                 <Rating count={item.reviewCount} label={'Reviews'}/>
                 <Rating count={item.ratingAverage} label={'Rating'}/>
             </FlexBox>
       
        
          {/* <Text>Forks: {item.forksCount}</Text>
          <Text>Reviews: {item.reviewCount}</Text>
          <Text>Rating: {item.ratingAverage}</Text> */}
        </View>
    )
}

export default ReposItem
