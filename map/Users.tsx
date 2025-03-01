import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

interface UserArray{
    id:number;
    name:string;
    age:number;
    followers:number;
    nickname:string
}

const users: UserArray[] = [
    {
        id:1,
        name:'John',
        age:20,
        followers: 100,
        nickname:'cenaman'
    },
    {
        id:2,
        name:'Favour',
        age:25,
        followers: 150,
        nickname:'catwoman'
    },
    {
        id:3,
        name:'Lilian',
        age:30,
        followers: 350,
        nickname:'baddie'
    },
    {
        id:4,
        name:'Godwin',
        age:45,
        followers: 150,
        nickname:'Sufficient'
    }
]


const Users: React.FC = () => {

  return (
    <View>
      <FlatList 
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
            <View>
                <Text>Name: {item.name}</Text>
                <Text>Age: {item.age}</Text>
                <Text>Follower: {item.followers}</Text>
                <Text>Nikname: {item.nickname}</Text>
            </View>
        )}
      
      />
    </View>
  )
}

export default Users

const styles = StyleSheet.create({})