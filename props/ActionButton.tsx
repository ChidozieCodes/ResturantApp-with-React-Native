import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface ActionButtonProps{
    title: string;
    Press: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({title, Press}) => {
  return (
    <View>
      <Button title={title} onPress={Press}/>
    </View>
  )
}

export default ActionButton

const styles = StyleSheet.create({})