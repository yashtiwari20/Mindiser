import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, BackHandler } from 'react-native'
import React,{useEffect} from 'react'


export default function Main({ navigation }) {

  
  
  return (
    <ScrollView style={{ backgroundColor: 'black', }}>
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: '10%' }}>
          <Text style={styles.outertxt}>Quiz Catagories</Text>
          <TouchableOpacity style={styles.logbtn} onPress={() => { navigation.navigate('Login') }} >
            <Text style={styles.logtxt}>Logout</Text></TouchableOpacity>
        </View>
        <View style={styles.catmain}>
          <TouchableOpacity style={styles.catg} onPress={() => navigation.navigate('Quiz', { number: 1, catg: 'Genral Knowledge' })}>
            <Image source={require('../Image/GK.png')} style={styles.img} />
            <Text style={styles.innertxt}>Genral Knowledge</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.catg} onPress={() => navigation.navigate('Quiz', { number: 2, catg: 'Maths' })}>
            <Image source={require('../Image/math.png')} style={styles.img} />
            <Text style={styles.innertxt}>Maths</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.catg} onPress={() => navigation.navigate('Quiz', { number: 3, catg: 'Science' })}>
            <Image source={require('../Image/science.png')} style={styles.img} />
            <Text style={styles.innertxt}>Science</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.catmain}>
          <TouchableOpacity style={styles.catg} onPress={() => navigation.navigate('Quiz', { number: 4, catg: 'Animal' })}>
            <Image source={require('../Image/Animal.png')} style={styles.img} />
            <Text style={styles.innertxt}>Animal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.catg} onPress={() => navigation.navigate('Quiz', { number: 5, catg: 'Computer' })}>
            <Image source={require('../Image/computer.png')} style={styles.img} />
            <Text style={styles.innertxt}>Computer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.catg} onPress={() => navigation.navigate('Quiz', { number: 6, catg: 'Geography' })}>
            <Image source={require('../Image/geo.png')} style={styles.img} />
            <Text style={styles.innertxt}>Geography</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.catmain}>
          <TouchableOpacity style={styles.catg} onPress={() => navigation.navigate('Quiz', { number: 7, catg: 'Sports' })}>
            <Image source={require('../Image/sports.png')} style={styles.img} />
            <Text style={styles.innertxt}>Sports</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.catg} onPress={() => navigation.navigate('Quiz', { number: 8 })}>
            <Image source={require('../Image/mix.png')} style={styles.img} />
            <Text style={styles.innertxt}>Mixed</Text>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  )
} const styles = StyleSheet.create({
  catg: {
    height: 100,
    marginVertical: '10%',
    marginHorizontal: '4%',
    width: '25%',

  },
  catmain: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  img: {
    backgroundColor: '#D8D8D8',
    borderRadius: 20,
    height: 95,
    width: 95,
  },
  innertxt: {
    color: 'gray',
    fontSize: 17,
    paddingVertical: 10,
    textAlign: 'center',
  },
  logbtn: {
    backgroundColor: 'white',
    borderRadius: 20
  },
  logtxt: {
    color: 'black',
    fontSize: 15,
    padding: 10,
  },
  outertxt: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',

  }
})