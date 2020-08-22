import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BannerAd, TestIds, BannerAdSize } from '@react-native-firebase/admob';

const adUnitIdBannerAd = __DEV__ ? TestIds.BANNER : 'ca-app-pub-3394303418588880~2644318016';

export default function NewsletterScreen() {
    return (
        <View style={styles.conatiner}>
        <View style={{ justifyContent: 'flex-start', marginBottom: 300,  marginTop: 20, }}>
            <BannerAd unitId={adUnitIdBannerAd} 
              size={BannerAdSize.SMART_BANNER}
              requestOptions={{
                requestNonPersonalizedAdsOnly: true,
              }}
          />
        </View>
            <Text style={{fontFamily:'NunitoSans-ExtraBold',fontSize:20}}>Newsletter Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
      flex: 1,
      alignContent: 'center',
      alignItems: 'center',
    }
  })
  
