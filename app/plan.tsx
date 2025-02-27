import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import PlanHeader from '@/components/PlanHeader';
import Weeklybox from '@/components/Weeklybox'
import Monthlybox from '@/components/Monthlybox';

const plan = () => {
  return (
    <View style={styles.planWrapper}>
        <PlanHeader />
        <Text style={styles.yourTxt}>Your Plan</Text>
        <Weeklybox />
        <Monthlybox />
    </View>
  )
}

export default plan

const styles = StyleSheet.create({
    planWrapper:{
        flex:1,
        backgroundColor:'white',
        padding:25
    },
    yourTxt:{
        fontSize:20,
        marginTop:30
    }
})