import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React from 'react'

export default function Login({navigation}) {
  const handlelogin=()=>{
    Alert.alert('Login Success');
    navigation.navigate('Main')
  }
  return (
    <SafeAreaView style={{backgroundColor:'black',height:'100%'}}>
      <View>
        <Text style={styles.heading}>Log In</Text>
      </View>
      <View>
        <Text style={styles.outer}>Email</Text>
        <TextInput style={styles.txtinput} placeholderTextColor={'white'} placeholder='E-Mail' />
        <Text style={styles.outer}>Password</Text>
        <TextInput style={styles.txtinput} placeholder='Password' placeholderTextColor={'white'} />
        <TouchableOpacity>
          <Text style={styles.forgotpass}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlelogin}>
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