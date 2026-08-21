import { StyleSheet, Text, View,ScrollView, Image } from 'react-native'
import { useState, useEffect } from 'react'
import React from 'react'
import api from '../src/services/api'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Star } from 'lucide-react-native'



interface Film {
  id: string
  title: string
  description: string
  rt_score: string
  director: string
  image: string 
}

const FilmPage = ({route}: any) => {


  const {filmId} = route.params 
  const [film,setFilm] = useState<Film | null>(null)
  
  useEffect(() => {
    search(filmId)


  }, [filmId])
    async  function search(filmId: string) {
    try {
      const result = await api.get(`https://ghibliapi.vercel.app/films/${filmId}`)
      setFilm(result.data)
      console.log(result.data)
    } catch (error) {
      console.log(error)
      
    }
  }
  return (
 
    
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.ctnFilm}>
        <View style={{gap:10, position:"relative"}}>
          
       <Text style={styles.title}>{film?.title}</Text>
       <View style={styles.separator}></View>
       <Text style={{ textAlign:"center" ,color:"#000", fontFamily:"Ghibli-Bold"}}>{film?.director}</Text>
       
        <Image source={{uri: film?.image}} style={styles.image} />
            
          
       <Text style={styles.textBody}>{film?.description}</Text>
         
        </View>
        </ScrollView>

        
      </SafeAreaView>
    
      
    
  )
}

export default FilmPage

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  ctnFilm: {
    padding:20,
    
    

  },
  image:{
    width:"100%",
    height:500,
    borderRadius:20
  },
  title:{
    fontFamily:"Ghibli-Bold",
    fontSize:40,
    textAlign:"center"

  },
  textBody:{
    fontFamily:"Ghibli-Regular",
    fontSize:16,
    marginTop:20,
    textAlign:"justify",
    backgroundColor:"#fff",
    padding:20,
    borderRadius:16
  }, span: {
    fontSize: 14,
    color: "#fff",
    fontFamily:"Ghibli-Regular"
  },separator:{
    height: 1,
  backgroundColor: '#262626',
  marginVertical:10,
  width: '100%',
  }
})