import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Character from "../assets/assetCharacter.png"
const User = () => {
  return (
        <SafeAreaView style={styles.container}>
    <ScrollView>
      <View style={{gap:20, position:"relative"}}>

    <View style={styles.userPhoto}/>
     <View style={styles.separator}></View>
    <View style={{gap:10}}>
<Text style={{fontFamily:"Ghibli-Bold", textAlign:"center"}}>Name</Text>
    <Text style={{fontFamily:"Ghibli-Regular", textAlign:"center"}}>Miguel Vargas </Text>

    
    <Text style={{fontFamily:"Ghibli-Bold", textAlign:"center"}}>Email</Text>
    <Text style={{fontFamily:"Ghibli-Regular", textAlign:"center"}}>miguel@gmail.com </Text>
        
    </View>


  <Image source={Character} style={{height:70, width:70, position:"absolute", bottom:150, left:10}}/>

      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default User;

const styles = StyleSheet.create({
  userPhoto:{
    width:200,
    height:200,
    backgroundColor:"#fff",
    borderRadius:"100%"
  },
  container:{
    justifyContent:"center",
    alignItems:"center"
  },separator:{
    height: 1,
  backgroundColor: '#000',
  marginVertical:12,
  width: '100%',
  }
});
