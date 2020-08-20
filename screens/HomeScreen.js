import React from 'react'
import { StyleSheet, Text, View,Button ,TouchableOpacity} from 'react-native'

export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{justifyContent:'flex-start',paddingBottom:50}}>
        <Text style={styles.head}>Welcome to,</Text>
        <Text style={styles.head}>Sharva Foundation</Text>
        </View>
        <TouchableOpacity style={styles.btn} 
      onPress={() => navigation.navigate('Details')}>
        <Text style={styles.btnText}>
        Go to Details
        </Text>
      </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    conatiner: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    },
    head:{        
        fontFamily:"NunitoSans-ExtraBold",
        fontSize:30,
        textAlign:'center',
        color:'tomato'
    },
    btn: {
        width:200,
        height:45,
        borderRadius:25,
        backgroundColor:'tomato',
        justifyContent:'center',
        marginTop:20,
        marginHorizontal:25,
      },
      btnText:{
        fontSize: 20,
        textAlign:'center',
        color: '#FAF9F6',
        // fontWeight:'bold',
        fontFamily:'NunitoSans-SemiBold'
    
      }

  })