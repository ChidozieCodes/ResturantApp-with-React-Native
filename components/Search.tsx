import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

const Search = () => {
  return (
    <View style={styles.searchWrapper}>
        <View style={styles.searchBoxCon}>
            <EvilIcons name="search" size={24} color="black" />
            <TextInput 
                placeholder='Search lunch, dishes'
                style={styles.searchBox}
                underlineColorAndroid={'transparent'}
            />
        </View>
        <View style={styles.searchgridBox}>
            <Ionicons name="grid-outline" size={24} color="white" />
        </View>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    searchWrapper:{
        width:'100%',
        padding:15,
        backgroundColor:'white',
        flexDirection:'row'
    },
    searchBoxCon:{
        width:'80%',
        backgroundColor:'#f5f5f5',
        padding:10,
        flexDirection:'row',
        alignItems:'center',
        borderRadius:10
    },
    searchBox:{
        width:'100%',
        padding:12,
        // borderWidth:1,
        // borderColor:'gray'
       
    },
    searchgridBox:{
        width:'17%',
        padding:10,
        backgroundColor:'#9AD983',
        marginLeft:'auto',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    }
})