import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Button, Text, ActivityIndicator } from 'react-native'
import admob, { MaxAdContentRating, AdEventType } from '@react-native-firebase/admob';
import { InterstitialAd, RewardedAd, BannerAd, TestIds, BannerAdSize, RewardedAdEventType } from '@react-native-firebase/admob';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
const adUnitId = TestIds.INTERSTITIAL;

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

const rewarded = RewardedAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

export default function Contribute() {
  const [loaded, setLoaded] = useState(false);

  useState(() => {
    admob()
      .setRequestConfiguration({
        maxAdContentRating: MaxAdContentRating.PG,
        tagForChildDirectedTreatment: true,
        tagForUnderAgeOfConsent: true,
      })
      .then(() => {
        console.log('Done')
      });
  })

  useEffect(() => {
    const eventListener = interstitial.onAdEvent(type => {
      if (type === AdEventType.LOADED) {
        setLoaded(true);
      }
    });
    interstitial.load();
    return () => {
      eventListener();
    };
  }, []);

  useEffect(() => {
    const eventListener = rewarded.onAdEvent((type, error, reward) => {
      if (type === RewardedAdEventType.LOADED) {
        setLoaded(true);
      }

      if (type === RewardedAdEventType.EARNED_REWARD) {
        console.log('User earned reward of ', reward);
      }
    });
    rewarded.load();
    return () => {
      eventListener();
    };
  }, []);



  if (!loaded) {
    <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color="#00ff00" />
  </View>
  }

  return (
    
    <View style={styles.conatiner}>
      <BannerAd unitId={TestIds.BANNER} 
        size={BannerAdSize.SMART_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
     />
     <Text></Text>
     <TouchableOpacity style={styles.btn} 
      onPress={() => {
        interstitial.show();
        }}>
        <Text style={styles.btnText}>
        Show Interstitial
        </Text>
      </TouchableOpacity>
      
      <Text></Text>
      <TouchableOpacity style={styles.btn} 
      onPress={() => {
          rewarded.show();
        }}>
        <Text style={styles.btnText}>
        Show Rewarded Ad
        </Text>
      </TouchableOpacity>
      
    </View>
    
  )
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
  btn: {
    width:220,
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
    fontFamily:'Nunito-Bold'

  }
})
