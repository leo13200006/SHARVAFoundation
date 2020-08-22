import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, ActivityIndicator, TouchableOpacity, Alert } from 'react-native'
import admob, { MaxAdContentRating, AdEventType } from '@react-native-firebase/admob';
import { InterstitialAd, RewardedAd, BannerAd, TestIds, BannerAdSize, RewardedAdEventType } from '@react-native-firebase/admob';
// import { NavigationContainer } from '@react-navigation/native';
const adUnitIdInterstitial = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-3394303418588880~2644318016';
const adUnitIdRewarded = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-3394303418588880~2644318016';
const adUnitIdBannerAd = __DEV__ ? TestIds.BANNER : 'ca-app-pub-3394303418588880~2644318016';

const interstitial = InterstitialAd.createForAdRequest(adUnitIdInterstitial, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

const rewarded = RewardedAd.createForAdRequest(TestIds.REWARDED, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

export default function Contribute() {
  const [loaded, setLoaded] = useState(false);
  const [reBtn, setReBtn] = useState(false);
  const [reIn, setReIn] = useState(false);

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
    console.log('interstitial')
    var eventListener = interstitial.onAdEvent(type => {
      if (type === AdEventType.LOADED) {
        setLoaded(true);
      }
    });
    interstitial.load();

    console.log('Reward')
    eventListener = rewarded.onAdEvent((type, error, reward) => {
      if (type === RewardedAdEventType.LOADED) {
        setLoaded(true);
      }

      if (type === RewardedAdEventType.EARNED_REWARD) {
        console.log('User earned reward of ', reward);
      }
    });
    rewarded.load()

    return(() => {
      eventListener()
    })

  });
  

  if (loaded) {
    <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color="#00ff00" />
  </View>
  }

  return (
    
    <View style={styles.conatiner}>
      <BannerAd unitId={adUnitIdBannerAd} 
        size={BannerAdSize.SMART_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
     />
     <Text></Text>
     <TouchableOpacity style={!reIn ? styles.btn : styles.doneBtn} 
      disabled={reIn}
      onPress={() => {
        console.log('Pressed')
        setReIn(true)
        setTimeout(() => {
          setReIn(false)
        },10000)
        interstitial.show();
      }}>
        <Text style={styles.btnText}>
        Show Interstitial
        </Text>
      </TouchableOpacity>
      
     <Text></Text>
      <TouchableOpacity style={!reBtn ? styles.btn : styles.doneBtn} 
      disabled={reBtn}
      onPress={() => {
        console.log('Pressed')
        setReBtn(true)
        setTimeout(() => {
          setReBtn(false)
        },50000)
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

  },
  doneBtn: {
    width:220,
    height:45,
    borderRadius:25,
    backgroundColor:'grey',
    justifyContent:'center',
    marginTop:20,
    marginHorizontal:25,
  }
})
