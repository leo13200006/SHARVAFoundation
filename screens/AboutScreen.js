import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function AboutScreen() {
    return (
        <View style={styles.conatiner}>
            <Text>About Screen</Text>
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
  
