import { StyleSheet, Text, View,ScrollView, Image } from 'react-native'
import { useState, useEffect } from 'react'
import React from 'react'
import api from '../src/services/api'
import { SafeAreaView } from 'react-native-safe-area-context'



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
          <View>
        <Image source={{uri: film?.image}} style={styles.image} />

          </View>
       <Text>{film?.title}</Text>
       <Text>{film?.director}</Text>
       <Text>{film?.rt_score}</Text>
       <Text>{film?.description}</Text>
        </ScrollView>

        
      </SafeAreaView>
    
      
    
  )
}

export default FilmPage

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  ctnFilm: {

  },
  image:{
    width:200,
    height:200
  }
})