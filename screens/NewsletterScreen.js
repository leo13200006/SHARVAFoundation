import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function NewsletterScreen() {
    return (
        <View style={styles.conatiner}>
            <Text style={{fontFamily:'NunitoSans-ExtraBold',fontSize:20}}>Newsletter Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    }
  })
  
