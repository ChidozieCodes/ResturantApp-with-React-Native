import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Weeklybox = () => {
  return (
    <View style={styles.weeklyWrapper}>
        <View style={styles.weeklyRowone}>
            <Text style={styles.weeklyText1}>Weekly Plan</Text>
            <MaterialCommunityIcons style={styles.arrowCon} name="arrow-top-right-thin-circle-outline" size={24} color="white" />
        </View>
        <Text style={styles.sevensdays}>For 7 days</Text>
        <View style={styles.perWeekWrapper}>
            <Text style={styles.perWeek}>Per Week</Text>
            <Text style={styles.bdtone}>2000 BDT</Text>
        </View>
    </View>
  )
}

export default Weeklybox

const styles = StyleSheet.create({
    weeklyWrapper:{
        width:'100%',
        padding:15,
        backgroundColor:'#9AD983',
        marginVertical:20,
        borderRadius:10,
    },
    weeklyRowone:{
        flexDirection:'row',
        alignItems:'center'
    },
    weeklyText1:{
        fontSize:20,
        color:'white'
    },
    arrowCon:{
        marginLeft:'auto'
    },
    sevensdays:{
        color:'white',
        fontSize:12,
        marginVertical:10
    },
    perWeekWrapper:{
        width:'30%',
        marginLeft:'auto'
    },
    perWeek:{
        fontSize:12,
        color:'white',
    },
    bdtone:{
        color:'white',
        fontWeight:'bold',
        fontSize:20,
    }
  
})