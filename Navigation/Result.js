import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Result=({navigation,route})=> {
  const{ans}=route.params
  const {catg}=route.params;
  return (
   <ScrollView style={{backgroundColor:'black'}}>
    <View style={styles.txtcontainer}>
      <Text style={styles.heding}>{catg}</Text>
      <Text style={styles.heding}>Quiz Result</Text>
    </View>
      <Image source={require('../Image/trophy.png')} style={styles.img}/>
    <View>
      <Text style={styles.txt}>Congratulation</Text>
    </View>
    <Text style={styles.scrtxt}>Your Score</Text>
    <Text style={styles.scrtxt}>{ans}/10</Text>
    <View style={{marginTop:15}}>
      <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate("Main")}}>
        <Text style={styles.btntxt}>Go Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btntxt}>Logout</Text>
      </TouchableOpacity>
    </View>
   </ScrollView>
  )
}
export default Result;

const styles=StyleSheet.create({
  img:{
    width:320,
    height:320,
    alignSelf:'center'
  },
  heding:{
    color:'white',
    fontSize:35,
    textAlign:'center',
  },
  txtcontainer:{
    marginTop:'15%'
  },
  txt:{
      color:'yellow',
      textAlign:'center',
      fontSize:35,
      marginBottom:10
  },
  btn:{
    backgroundColor:'yellow',
    borderRadius:20,
    alignSelf:'center',
    
    marginVertical:15
  },
  btntxt:{
    fontSize:20,
    padding:10,
    color:'black'
  },
  scrtxt:{
    color:'white',
    textAlign:'center',
    fontSize:20
  }
})