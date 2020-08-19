import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Button, Text } from 'react-native'
import admob, { MaxAdContentRating, AdEventType } from '@react-native-firebase/admob';
import { InterstitialAd, RewardedAd, BannerAd, TestIds, BannerAdSize, RewardedAdEventType } from '@react-native-firebase/admob';
import { NavigationContainer } from '@react-navigation/native';
const adUnitId = TestIds.INTERSTITIAL;

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

const rewarded = RewardedAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

export default function LeaderBoard() {
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
    return null;
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
      <Button
        title="Show Interstitial"
        onPress={() => {
          interstitial.show();
        }}
      />
      <Text></Text>
      <Button
        title="Show Rewarded Ad"
        onPress={() => {
          rewarded.show();
        }}
      />
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
