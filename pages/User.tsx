import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const User = () => {
  return (
        <SafeAreaView style={styles.container}>
    <ScrollView>
      <View style={{gap:20}}>

    <View style={styles.userPhoto}/>
    <View style={{gap:10}}>
<Text style={{fontFamily:"Ghibli-Bold", textAlign:"center"}}>Name</Text>
    <Text style={{fontFamily:"Ghibli-Regular", textAlign:"center"}}>Miguel Vargas </Text>

    
    <Text style={{fontFamily:"Ghibli-Bold", textAlign:"center"}}>Email</Text>
    <Text style={{fontFamily:"Ghibli-Regular", textAlign:"center"}}>miguel@gmail.com </Text>
        
    </View>


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
  }
});
