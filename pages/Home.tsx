import { Button, StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import api from "../src/services/api";
import { CardFilm } from "../components/ui/CardFilm"
import AsyncStorage from "@react-native-async-storage/async-storage";
import Logo from "../assets/studio-ghibli-seeklogo.png"



const Home = () => {
 
  const [films, setFilms] = useState<any>([]);
  useEffect(() => {
    search();
  }, []);
    


  async function search() {
    try {
      const result = await api.get("https://ghibliapi.vercel.app/films"); // Precisamos usar async e await, pois os dados não são intantaneos
  
      setFilms(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  }
 
  return (
    
      <SafeAreaView
        style={styles.container}
      >
        <View style={{marginBottom:20, padding:20}}>

        <Image source={Logo} style={{height:120, width:"100%", resizeMode:"contain"}}/>
        </View>
           <View style={styles.separator}></View>
       <FlatList
       data={films}
       keyExtractor={(item)=> item.id}
       renderItem={({item}) =>(<CardFilm   title={item.title} image={item.image} description={item.description} director={item.director} rt_score={item.rt_score}  id={item.id}   />)}
       
       />
      </SafeAreaView>
    
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:20
  },
  title: {
    textAlign:"center",
    fontSize:24,
    fontFamily:"Ghibli-Bold"
  },separator:{
    height: 1,
  backgroundColor: '#000',
  marginVertical:12,
  width: '100%',
  }
});
