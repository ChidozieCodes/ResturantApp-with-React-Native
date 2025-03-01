import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/Header';
import Search from '@/components/Search';
import Greet from '@/props/Greet';
import ActionButton from '@/props/ActionButton';
import Users from '@/map/Users';


const home = () => {

  function Chido(){
    // Alert.alert('Button is pressed');
    console.log('button is pressed')
  }
  return (
    <ScrollView>
      <Header />
      <Search />
      <Greet name='chidozie' age={30} />
      <ActionButton title='Click here' Press={Chido}/>
      <Users />
    </ScrollView>
  )
}

export default home

const styles = StyleSheet.create({})