import React from 'react'
import { Platform as PlatformNative,StyleSheet ,Text} from 'react-native'

const styles =StyleSheet.create({
    text:{
        color: PlatformNative.OS === 'android' ?'green':'blue'
    }
})

const Platform = () => {
    return (
        <Text style={styles.text}>
          Your platform is: {PlatformNative.OS}  
        </Text>
    )
}

export default Platform
