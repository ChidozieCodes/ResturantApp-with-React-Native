import {
     StyleSheet, 
     Text, 
     View,
     TextInput,
     TouchableOpacity,
     Button,
     Alert 
    } from 'react-native'
import React, { useState } from 'react'

interface Todo {
    id: string;
    text: string;
}

const todo = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [inputText, setInputText] = useState('');
    const [editingId, setEditingId] = useState<string | null>(null); 

    // ADD NEW TODO

    function addTodo(){
        if(!inputText.trim()) return
        setTodos([...todos, {id: Date.now().toString(), text: inputText}]);
        setInputText('');
    }

    const updateTodo = () => {
        if(!inputText.trim()) return;
        setTodos(
            todos.map((todo) =>
                todo.id === editingId ? {...todo, text: inputText} : todo
            )
        );
        //Reset  editing state
        setEditingId(null);
        setInputText('');
    }

    const deleteTodo = (id: string) => {
        Alert.alert('Delete', 'Are you sure?', [
            {text: 'Cancel', style: 'cancel'},
            {text: 'Delete', onPress: () => setTodos(todos.filter((t) => t.id !== id))},
        ])
    }

  return (
    <View>
      <Text>todo</Text>
    </View>
  )
}

export default todo

const styles = StyleSheet.create({})