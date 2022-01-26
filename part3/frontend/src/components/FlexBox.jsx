import React from 'react'
import { StyleSheet ,View} from 'react-native'

const styles = StyleSheet.create({
   
    flexColumn:{
         flexDirection: 'column',
    },
    flexRow:{
        flexDirection:'row'
    },
    flexContainer: {
        display:'flex',
   
  },  
  flexItem:{
      padding:10
  },
  flexItemA: {
    flexGrow: 0,
    backgroundColor: 'green',
  },
  flexItemB: {
    flexGrow: 1,
    backgroundColor: 'blue',
  },
 
})

const FlexBox = ({direction,children,style})=>{
 
    const flexBoxStyles =[
        styles.flexContainer,
        direction==='row' ? styles.flexRow : styles.flexColumn ,
        style
    ]
    return <View style={flexBoxStyles}>{children}</View>
}
export default FlexBox