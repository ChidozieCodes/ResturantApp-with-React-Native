import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React, {useState} from 'react'

const Counter = () => {
  const [count, setCounter] =useState(0);

  const increment = () => {
    setCounter(count + 1);
  }

  const decrement = () =>{
    setCounter(count - 1);
  }

  function dog(){
    Alert.alert('dog');
  }
  return (
    <View>
      <Text>Counter</Text>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({})