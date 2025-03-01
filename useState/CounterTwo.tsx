import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import { useState } from 'react';

const CounterTwo = () => {

const [count, setCount] = useState(0);

function IncreaseCount(){
    setCount(count + 5);

}

function DecreaseCount(){
    if(count < 5){
        setCount(5);
    }

    setCount(count - 5);

    
}

function ResetCount(){
    setCount(5);
}

  return (
    <View style={styles.wrapper}>
      <Text style={styles.Txt}>Count: {count}</Text>
      <View style={styles.btnCountCon}>
            <TouchableOpacity onPress={IncreaseCount} style={styles.countBtn}>
                <Text>Increase</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={DecreaseCount} style={styles.countBtn}>
                <Text>Decrease</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={ResetCount} style={styles.countBtn}>
                <Text>
                    Reset
                </Text>
            </TouchableOpacity>
      </View>
    </View>
  )
}

export default CounterTwo

const styles = StyleSheet.create({
    wrapper:{
        width:'100%',
        padding:10,
        // backgroundColor:'white',
        
    },
    btnCountCon:{
        width:'100%',
        flexDirection:'row',
        marginVertical:20
    },
    countBtn:{
        width:'31.33%',
        padding:15,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'skyblue',
        margin:'1%',
        borderRadius:10

    },
    Txt:{
        fontWeight:'bold',
        fontSize:25
    }
})