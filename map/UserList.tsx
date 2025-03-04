import { StyleSheet, Text, View } from 'react-native'
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


const UserList : React.FC= () => {
  return (
    <View>
        {
            users.map((user) => (
                <View key={user.id}>
                     <Text>Name: {user.name}</Text>
                     <Text>Name: {user.age}</Text>
                </View>
            ))
        }
    </View>
  )
}

export default UserList

const styles = StyleSheet.create({})