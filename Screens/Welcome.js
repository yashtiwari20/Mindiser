import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'



export default function Welcome({ navigation }) {
  return (
    <SafeAreaView style={styles.main}>
      <View >
        <Text style={styles.txt}>Welcome</Text>
      </View>
      <View style={styles.imgcontainer}>
        <Image source={require('../Image/main.png')} style={styles.img}/>

      </View>
      <View style={styles.buttomView}>
        <View style={styles.btn}>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.txt1}>
              Join Us!
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.txt2}>
            Already Have an Account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.txt2}>  Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({

  btn: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 2,
    justifyContent: 'center',

  },
  buttomView: {
    flex: 2,
    justifyContent: "flex-end",
    marginBottom: '20%',
  },
  img:{
    height:230,
    width:230,
  },
  imgcontainer:{
    margin:'20%',
    marginRight:"10%",
  },
  main: {
    alignItems: 'center',
    backgroundColor: 'black',
    height: '100%',
  },
  txt: {
    color: 'white',
    fontSize: 50,
    marginTop: '20%',
  },
  txt1: {
    color: 'black',
    fontSize: 30,

  },
  txt2: {
    color: 'white',
    fontSize: 18,
  }
})