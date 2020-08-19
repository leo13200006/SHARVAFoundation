import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Contribute from './screens/Contribute';
import NewsletterScreen from './screens/NewsletterScreen'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'



function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontFamily:'NunitoSans-ExtraBold',fontSize:20}}>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} 
      options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#ffe6e6',
          },
          headerTintColor: 'gray',
          headerTitleStyle: {
          fontFamily:'NunitoSans-ExtraBold',
          alignSelf:'center',
          fontSize:25
          },
        }}/>
      <HomeStack.Screen name="Details" component={AboutScreen} 
        options={{
          // title: 'Home',
          headerStyle: {
            backgroundColor: '#ffe6e6',
          },
          headerTintColor: 'gray',
          headerTitleStyle: {
          fontFamily:'NunitoSans-ExtraBold',
          alignSelf:'center',
          fontSize:25
          },
        }}
      />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} 
        options={{
          // title: 'Home',
          headerStyle: {
            backgroundColor: '#ffe6e6',
          },
          headerTintColor: 'gray',
          headerTitleStyle: {
          fontFamily:'NunitoSans-ExtraBold',
          alignSelf:'center',
          fontSize:25
          },
        }}
      />
      <SettingsStack.Screen name="Details" component={AboutScreen} 
        options={{
          // title: 'Home',
          headerStyle: {
            backgroundColor: '#ffe6e6',
          },
          headerTintColor: 'gray',
          headerTitleStyle: {
          fontFamily:'NunitoSans-ExtraBold',
          alignSelf:'center',
          fontSize:25
          },
        }}
      />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home-sharp'
                : 'ios-home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-settings-sharp' : 'ios-settings-outline';
            }
            else if(route.name === 'Contribute') {
              iconName = focused ? 'ios-wallet-sharp' : 'ios-wallet-outline';
            }
            else if(route.name === 'Notifications') {
              iconName = focused ? 'ios-notifications-sharp' : 'ios-notifications-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          tabStyle:{
            
          },labelStyle:{
            fontFamily:'NunitoSans-ExtraBold',
            fontSize:13
          }
        }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Contribute" component={Contribute} />
        <Tab.Screen name="Notifications" component={NewsletterScreen} options={{ tabBarBadge: 3 }}/>
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}