import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Login,Signup,Welcome,} from './Screens'
import Main from './Navigation/Main';
import Quiz from './Navigation/Quiz';
import Result from './Navigation/Result';

const Stack=createNativeStackNavigator()

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
           <Stack.Screen name='Welcome' component={Welcome} options={{headerShown:false}}/>
           <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
           <Stack.Screen name='Signup' component={Signup} options={{headerShown:false}}/>
           <Stack.Screen name='Main' component={Main} options={{headerShown:false}}/>
           <Stack.Screen name='Quiz' component={Quiz} options={{headerShown:false}}/>
           <Stack.Screen name='Result' component={Result} options={{headerShown:false}}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}