import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

const PlanHeader = () => {
  return (
    <View style={styles.PlanHeader}>
        <View style={styles.planArrowBox}>
            <AntDesign name="arrowleft" size={24} color="black" />
        </View>
        <Text style={styles.planArText}>Plans</Text>
    </View>
  )
}

export default PlanHeader

const styles = StyleSheet.create({
    PlanHeader:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        // padding:20
    },
    planArrowBox:{
        width:40,
        height:40,
        backgroundColor:'#f5f5f5',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center'
    },
    planArText:{
        marginLeft:100,
        fontSize:20,
        fontWeight:'bold'
        
    }
})