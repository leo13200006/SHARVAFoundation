import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function HomeScreen() {
    return (
        <View style={styles.conatiner}>
            <Text>Home Screen</Text>
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
  
