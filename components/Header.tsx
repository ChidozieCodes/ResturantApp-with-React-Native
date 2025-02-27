import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import {Ionicons, MaterialIcons, AntDesign} from '@expo/vector-icons';
import React from 'react'

const Header = () => {
  return (
    <View style={styles.header}>
        <TouchableOpacity style={styles.iconBox1}>
            <Ionicons name='grid-outline' size={24} color={'black'} />
        </TouchableOpacity>
        <View style={styles.location}>
            <Ionicons name='location-outline' size={18} color={'green'}/>
            <Text style={styles.textLocation}>Dhanmondi, Dhaka</Text>
            <Ionicons name='chevron-down' size={18} color={'green'} style={styles.dropdownIcon}/>
        </View>
        <TouchableOpacity style={styles.iconBox2}>
            <Ionicons name='notifications-outline' size={24} color={'black'}/>
        </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header:{
        width:'100%',
        justifyContent: 'space-between',
        backgroundColor:'white',
        flexDirection:'row',
        padding:15,
        alignItems:'center'
    },
    location:{
        flexDirection:'row',
        alignItems:'center'
    },
    textLocation:{
        fontWeight:'bold',
        fontSize:14,
        marginLeft:10
    },
    dropdownIcon:{

    },
    iconBox1:{
        backgroundColor:'#f5f5f5',
        padding:10,
        borderRadius:7
    },
    iconBox2:{
        backgroundColor:'#f5f5f5',
        padding:10,
        borderRadius:7
    }
})