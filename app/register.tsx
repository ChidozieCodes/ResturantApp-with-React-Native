import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import {images, icons} from '@/content/assets';
import { router, Href } from 'expo-router';

const App = () => {
  return (
    <ImageBackground source={images.RegisterBanner} style={styles.background}>
     
      <View style={styles.overlay}>
        <View style={styles.container}>
            <Text style={styles.signUpText}>Sign Up</Text>
              <View style={styles.socialBoxCon}>
                <View style={styles.socialbox}>
                  <Image source={icons.googleIcon}  />
                </View>
                <View style={styles.socialbox}>
                  <Image source={icons.facebookIcon}  />
                </View>
                <View style={styles.socialbox}>
                  <Image source={icons.appleIcon}  />
                </View>
              </View>
              <Text style={styles.Remail}>Or, register with email</Text>

              <Text style={styles.inputText}>Full name</Text>
              <TextInput style={styles.input} placeholder="Enter your name" />

              <Text style={styles.inputText}>Email address</Text>
              <TextInput style={styles.input} placeholder="Enter your email" />
                        
              <Text style={styles.inputText}>Password</Text>
              <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry />
              
              <TouchableOpacity style={styles.button} onPress={() => router.push('/register' as Href)}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => router.push('/login' as Href)}>
                  <Text style={styles.registerText}>Already have an account? Login</Text>
              </TouchableOpacity>
              
        </View>
      </View>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1, // Makes the background image cover the entire screen
    resizeMode: "cover", // Ensures the image covers the screen while maintaining aspect ratio
  },
  overlay: {
    flex: 1, // Makes the overlay cover the entire screen
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay (50% opacity)
    justifyContent: "center", // Centers the content vertically
    alignItems: "center", // Centers the content horizontally
  },
  container:{
    width:'90%',
    backgroundColor:'white',
    marginHorizontal:50,
    borderRadius:20
  },
  signUpText:{
    fontSize:30,
    fontWeight:'bold',
    marginVertical:30,
    marginLeft:25
  },
  socialBoxCon:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:15,
    marginBottom:20
  },
  socialbox:{
    width:'29.33%',
    height:70,
    backgroundColor:'#F5F5F5',
    // flex:1,
    margin:'2%',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    resizeMode:'contain'
  },
  Remail:{
    marginLeft:25,
    marginBottom:20

  },
  inputText: {
    fontSize: 15,
    marginLeft: 25,
    marginVertical:10,
    color: '#333',
  },
  input: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 20,
    marginHorizontal:25,
    paddingHorizontal: 20,
    borderRadius: 10,
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#9AD983',
    paddingVertical: 20,
    marginBottom:20,
    marginHorizontal:25,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#9AD983',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#888',
    marginBottom:25
   
  },

});

export default App;
