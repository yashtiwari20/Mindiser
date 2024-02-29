import { View, Text, ScrollView, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import Main from '../Navigation/Main'

export default function Signup() {
  return (
    <ScrollView style={{backgroundColor:'black'}}>
      <View>
        <Text style={styles.heading}>Sign Up</Text>
      </View>
      <View style={styles.inptview}>
        <TextInput style={styles.Txtinpt} placeholderTextColor={'white'} placeholder='Enter Your Name'/>
        <TextInput style={styles.Txtinpt} placeholderTextColor={'white'} placeholder='Enter Your Email'/>
        <TextInput style={styles.Txtinpt} placeholderTextColor={'white'} placeholder='Enter Your Password'/>
        <TextInput style={styles.Txtinpt} placeholderTextColor={'white'} placeholder='Re-Enter Your Password'/>
        <TextInput style={styles.Txtinpt} placeholderTextColor={'white'} placeholder='Enter Your Mobile No.'/>
      </View>
      <View>
        <TouchableOpacity style={styles.btn} onPress={()=>Alert.alert('Success')}>
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
    marginTop:'10%',
    padding:10,
    width:'90%',
  }
  })