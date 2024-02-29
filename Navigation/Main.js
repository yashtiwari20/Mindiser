import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import Quiz from './Quiz'

export default function Main({navigation}) {
  return (
    <ScrollView style={{ backgroundColor: 'black' ,}}>
      <View>
        <Text style={styles.outertxt}>Quiz Catagories</Text>
        <View style={styles.catmain}>
          <TouchableOpacity  style={styles.catg} onPress={()=>navigation.navigate('Quiz',{number:1,catg:'Genral Knowledge'})}>
            <Image source={require('../Image/GK.png')} style={styles.img} />
            <Text style={styles.innertxt}>Genral Knowledge</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.catg} onPress={()=>navigation.navigate('Quiz',{number:2,catg:'Maths'})}>
            <Image source={require('../Image/math.png')} style={styles.img}/>
            <Text style={styles.innertxt}>Maths</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.catg} onPress={()=>navigation.navigate('Quiz',{number:3,catg:'Science'})}>
            <Image source={require('../Image/science.png')} style={styles.img}/>
            <Text style={styles.innertxt}>Science</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.catmain}>
          <TouchableOpacity  style={styles.catg} onPress={()=>navigation.navigate('Quiz',{number:4,catg:'Animal'})}>
            <Image source={require('../Image/Eng.png')} style={styles.img}/>
            <Text style={styles.innertxt}>Animal</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.catg} onPress={()=>navigation.navigate('Quiz',{number:5,catg:'Art & craft'})}>
            <Image source={require('../Image/art.png')} style={styles.img}/>
            <Text style={styles.innertxt}>Art & Craft</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.catg} onPress={()=>navigation.navigate('Quiz',{number:6,catg:'Geography'})}>
            <Image source={require('../Image/geo.png')} style={styles.img}/>
            <Text style={styles.innertxt}>Geography</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.catmain}>
          <TouchableOpacity  style={styles.catg} onPress={()=>navigation.navigate('Quiz',{number:7,catg:'Sports'})}>
            <Image source={require('../Image/sports.png')} style={styles.img}/>
            <Text style={styles.innertxt}>Sports</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.catg} onPress={()=>navigation.navigate('Quiz',{number:8})}>
            <Image source={require('../Image/mix.png')} style={styles.img}/>
            <Text style={styles.innertxt}>Mixed</Text>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  )
} const styles = StyleSheet.create({
  catg: {
    width: '25%',
    marginVertical: '10%',
    marginHorizontal: '4%',
    height: 100
  },
  catmain: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  img: {
    height:95,
    width: 95,
    backgroundColor: '#D8D8D8',
    borderRadius: 20,
  },
  innertxt: {
    color: 'gray',
    textAlign: 'center',
    fontSize: 17,
    paddingVertical:10
  },
  outertxt:{
    fontSize:30,
    color:'white',
    textAlign:'center',
    marginVertical:'10%'
  }
})