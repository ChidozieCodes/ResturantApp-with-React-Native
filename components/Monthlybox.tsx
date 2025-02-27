import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Monthlybox = () => {
  return (
    <View style={styles.monthWrapper}>
        <View style={styles.monthRowone}>
            <Text style={styles.monthText1}>Monthly Plan</Text>
            <MaterialCommunityIcons style={styles.arrowCon} name="arrow-top-right-thin-circle-outline" size={24} color="black" />
        </View>
        <Text style={styles.sevensdays}>For 30 days</Text>
        <View style={styles.perMonthWrapper}>
            <Text style={styles.perMonth}>Per Month</Text>
            <Text style={styles.bdtone}>6000 BDT</Text>
        </View>
    </View>
  )
}

export default Monthlybox

const styles = StyleSheet.create({
    monthWrapper:{
        width:'100%',
        padding:15,
        backgroundColor:'white',
        marginVertical:20,
        borderRadius:10,
        shadowColor:'#f5f5f5',
        shadowOffset:{width:0, height:4},
        shadowOpacity:0.3,
        shadowRadius:4,

        elevation:5
    },
    monthRowone:{
        flexDirection:'row',
        alignItems:'center'
    },
    monthText1:{
        fontSize:20,
        color:'black'
    },
    arrowCon:{
        marginLeft:'auto'
    },
    sevensdays:{
        color:'black',
        fontSize:12,
        marginVertical:10
    },
    perMonthWrapper:{
        width:'30%',
        marginLeft:'auto'
    },
    perMonth:{
        fontSize:12,
        color:'black',
    },
    bdtone:{
        color:'black',
        fontWeight:'bold',
        fontSize:20,
    }
  
})