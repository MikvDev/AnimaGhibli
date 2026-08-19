import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { CardFilm } from '../components/ui/CardFilm'
import { SafeAreaView } from 'react-native-safe-area-context'
interface Film {
  id: string
  title: string
  description: string
  rt_score: string
  director: string
  image: string 
  
}
const FavoritePage = () => {
  const [favorities, setFavorities] = useState<Film[]>([])
  useFocusEffect(
    useCallback(() => {
      async function loadFavorities(){
        try {
          const data = await AsyncStorage.getItem('@ghibli_favorities')
          if(data){
            setFavorities(JSON.parse(data))
          }else{
            setFavorities([])
          }
        }catch(error){
            console.log(error)
        }
      }
      loadFavorities()
    },[])
  )
  function handleRemoveFromState(id: string) {
    setFavorities((prev) => prev.filter((film) => film.id !== id))
  }
  return (
    <SafeAreaView>

      <Text>FavoritePage</Text>
       <FlatList
             data={favorities}
             keyExtractor={(item)=> item.id}
             renderItem={({item}) =>(<CardFilm   title={item.title} image={item.image} description={item.description} director={item.director} rt_score={item.rt_score}  id={item.id}  onFavoriteToggle={() => handleRemoveFromState(item.id)} />)}
             
             />
    </SafeAreaView>
    
  )
}

export default FavoritePage

const styles = StyleSheet.create({})