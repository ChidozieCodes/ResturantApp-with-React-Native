import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import CounterTwo from '@/useState/CounterTwo';

const showCounter = () => {
  return (
    <View style={styles.wrapper}>
      <CounterTwo />
    </View>
  )
}

export default showCounter

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:'white'
    }
})