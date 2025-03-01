import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

interface GreetProps{
    name:string;
    age: number;
}

const Greet: React.FC<GreetProps> = ({name,age}) => {
  return (
    <View>
      <Text>My name is {name}</Text>
      <Text>My age is {age}</Text>
    </View>
  )
}

export default Greet

const styles = StyleSheet.create({})