import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React , { useState }from 'react'
import Main from '../Navigation/Main';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Retrieve user data from AsyncStorage
    try {
      const userDataString = await AsyncStorage.getItem('userData');
      if (userDataString !== null) {
        const userData = JSON.parse(userDataString);
        // Check if email and password match stored data
        if (userData.email === email && userData.password === password) {
          // Navigate to main screen upon successful login
          navigation.navigate('Main');
        } else {
          Alert.alert('Error', 'Invalid email or password');
        }
      } else {
        Alert.alert('Error', 'No user found. Please register first.');
      }
    } catch (error) {
      console.error('Error retrieving user data: ', error);
      Alert.alert('Error', 'An error occurred. Please try again.');
    }
  };


  return (
    <SafeAreaView style={{backgroundColor:'black',height:'100%'}}>
      <View>
        <Text style={styles.heading}>Log In</Text>
      </View>
      <View>
        <Text style={styles.outer}>Email</Text>
        <TextInput style={styles.txtinput} placeholderTextColor={'white'} placeholder='E-Mail'  keyboardType='email-address' onChangeText={setEmail} value={email}/>
        <Text style={styles.outer}>Password</Text>
        <TextInput style={styles.txtinput} placeholder='Password' placeholderTextColor={'white'}  secureTextEntry onChangeText={setPassword} value={password} />
        <TouchableOpacity>
          <Text style={styles.forgotpass}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.btn}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  btn:{
    alignSelf:'center',
    backgroundColor:'white',
    borderRadius:25,
    color:'black',
    fontSize:26,
    marginTop:'10%',
    padding:10,
    textAlign:'center',
    width:'90%',
  },
  heading: {
    color: 'white',
    fontSize: 30,
    marginTop: '10%',
    textAlign: 'center',
  },
  txtinput: {
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor:'white',
    color:'white',
    marginVertical: '5%',
    padding:15,
    width: '90%',
  },
  forgotpass:{
    color:'white',
    fontSize:15,
    marginHorizontal:25,
    
  },
  outer:{
    color:'white',
    fontSize:20,
    marginHorizontal:'7%',
  }
})