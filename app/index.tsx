import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react'
import {images} from '@/content/assets';
import { router, Href } from 'expo-router';



const index = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.chefCon}>
        <Image source={images.ChefMan} style={styles.chefBoss} />
      </View>

      <View style={styles.container}>
        <Text style={styles.topText}>The Fastest In Delivery <Text style={styles.food}>Food</Text></Text>
        <Text style={styles.subText}>our job is to filling your tummy with delicious food and fast delivery.</Text>

        <TouchableOpacity style={styles.getStartedBtn} onPress={() => router.push('/login' as Href)}>
          <Text style={styles.getStarted}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  wrapper:{
    flex: 1,
    backgroundColor:'white'
  },
  container:{
    width:'100%',
    backgroundColor:'white',
    height:'100%',
    paddingTop:60,
    borderTopLeftRadius:'10%',
    borderTopRightRadius:'10%',
    
  },
  chefCon:{
    
  },
  chefBoss:{
    width:'100%',

  },
  topText:{
    fontSize:40,
    marginHorizontal:20,
    textAlign:'center',
    fontWeight:'bold',

  },
  subText:{
    textAlign:'center',
    marginHorizontal:10,
    color:'rgb(154, 154, 154)',
    marginVertical:15,
    fontSize:18
  },
  getStartedBtn:{
    width:'90%',
    backgroundColor:'#9AD983',
    alignSelf:'center',
    padding:20,
    borderRadius:10,
    marginVertical:15,
  },
  getStarted:{
    textAlign:'center',
    color:'white',
    fontWeight:'bold',
    
  },
  food:{
    color:'#9AD983'
  }
})