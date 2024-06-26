import { View, Text, ScrollView, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react';

import Main from '../Navigation/Main'
import AsyncStorage from '@react-native-async-storage/async-storage';

const password_validate = (password) => {
  var re = {
      capital: /(?=.*[A-Z])/,
      length: /(?=.{7,10}$)/,
      specialChar: /[ -\/:-@\[-\`{-~]/,
      digit: /(?=.*[0-9])/,
  };
  return (
      re.capital.test(password) &&
      re.length.test(password) &&
      re.specialChar.test(password) &&
      re.digit.test(password)
  );
};

export default function Signup({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [pstxt,setPstxt]=useState('');
  const handleRegistration = async () => {
    // Validation checks
    if (!name || !email || !password || !confirmPassword || !mobileNo) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email');
      return;
    }
    if (!password_validate(password)) {
      Alert.alert('Error', 'Password must contain at least one uppercase letter, one special character, one digit, and be between 7 and 10 characters long');
      return;
    }

    try {
      // Save registration data to local storage
      const userData = { name, email, password, mobileNo };
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      Alert.alert('Success', 'Registration successful');
      // Navigate to login screen
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error saving registration data: ', error);
      Alert.alert('Error', 'An error occurred during registration. Please try again.');
    }
  };

  return (
    <ScrollView style={{backgroundColor:'black'}}>
      <View>
        <Text style={styles.heading}>Sign Up</Text>
      </View>
      <View style={styles.inptview}>
        <TextInput style={styles.Txtinpt} placeholderTextColor={'white'} placeholder='Enter Your Name' value={name} onChangeText={setName} />
        <TextInput style={styles.Txtinpt} placeholderTextColor={'white'} placeholder='Enter Your Email' value={email} onChangeText={setEmail} keyboardType='email-address'/>
        <TextInput style={styles.Txtinpt} placeholderTextColor={'white'} placeholder='Enter Your Password' value={password} onChangeText={setPassword} secureTextEntry />
        <TextInput style={styles.Txtinpt} placeholderTextColor={'white'} placeholder='Re-Enter Your Password' value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
        <TextInput style={styles.Txtinpt} placeholderTextColor={'white'} placeholder='Enter Your Mobile No.'value={mobileNo} keyboardType='phone-pad'  onChangeText={setMobileNo} />
      </View>
      <View>
        <TouchableOpacity style={styles.btn} onPress={handleRegistration}>
          <Text style={styles.btntxt}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
const styles=StyleSheet.create({
  inptview:{
    alignItems:'center'
  },
  btn:{
    alignSelf:'center',
    backgroundColor:'white',
    borderRadius:20,
    marginTop:'10%',
    padding:10,
    width:'90%',
  },
  btntxt:{
    color:'black',
    fontSize:28,
    textAlign:'center',
  },
  heading:{
    fontSize:30,
    color:'white',
    marginTop:'10%',
    textAlign:'center',
  },
  Txtinpt:{
    borderRadius:15,
    borderWidth:1,
    borderColor:'white',
    color:'white',
    marginTop:'10%',
    padding:10,
    width:'90%',

  }
  })