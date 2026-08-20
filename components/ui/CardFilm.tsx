import { StyleSheet, View, Image, Text, Alert, ImageBackground, Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Play from "lucide-react-native/icons/play"
import Heart from "lucide-react-native/icons/heart"
import Star from "lucide-react-native/icons/star"
import { BlurView } from "expo-blur"
type cardFilmProp = {
  id: string
  image: string
  title: string
  description: string
  director: string
  rt_score: string
  onFavoriteToggle?: () => void
}

export function CardFilm({ image, title, director, rt_score, id, description, onFavoriteToggle }: cardFilmProp) {
  const navigation = useNavigation<any>()



  async function handleToggleFavorite() {
    try {
      const stored = await AsyncStorage.getItem('@ghibli_favorities')
      const favorites: cardFilmProp[] = stored ? JSON.parse(stored) : []
      const isAlreadyFavorited = favorites.some((item) => item.id === id)
      let updatedFavorites;

      if (isAlreadyFavorited) {
        updatedFavorites = favorites.filter((item) => item.id !== id)
      } else {
        updatedFavorites = [...favorites, { id, title, image, director, rt_score, description }]
        Alert.alert("Sucesso!", `"${title}" foi adicionado aos favoritos`)
      }

      await AsyncStorage.setItem('@ghibli_favorities', JSON.stringify(updatedFavorites))
      if (onFavoriteToggle) {
        onFavoriteToggle()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: image }} style={{ width: "100%", height: "100%", justifyContent: "flex-end"}} imageStyle={{borderRadius:24}}>
       

        <BlurView    intensity={80} tint="dark" style={styles.info}>
          <View style={{position:"absolute", top:10, left:25, justifyContent:"center", alignItems:"center"}}> 
            <Star color={"#ebd79c"} fill={"#ebd79c"}/>
            <Text style={styles.span}>{rt_score}</Text>
            
          </View>

        
          <View   style={styles.ctnBtns}>
            <Text style={{fontFamily:"Ghibli-Bold", textAlign:"center", color:"#fff"}}>{director}</Text>
            <View style={styles.separator}></View>
            <Pressable onPress={() => navigation.navigate('FilmPage', { filmId: id })} style={styles.btn}>
             <Text style={styles.textBtn}>  Ver detalhes</Text>
            </Pressable>
          </View>
        
        </BlurView>

            <Pressable onPress={handleToggleFavorite} style={styles.FavBtn}>
              <Heart color={"#349eb6"}/>
            </Pressable>


        
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    width: "100%",
    height: 500,
    padding: 20,
    
    marginTop: 20,
    gap: 40,
    
    position:"relative"
  },
  title: {
    fontSize: 18,
    maxWidth:220,
    color: "#fff",
    fontFamily:"Ghibli-Bold"
    
    
  },
  span: {
    fontSize: 14,
    color: "#fff",
    fontFamily:"Ghibli-Regular"
  },
  ctnBtns: {
    gap: 7,
    padding:20,
    flexDirection:"column",
  },
  FavBtn:{
    position:"absolute",
    top:20,
    right:20,
    backgroundColor:"#fff",
    height:50,
    padding:24,
    width:50,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:100
  },
  btn: {
    width: "100%",
    justifyContent: "center",
    alignItems:"center",
    alignContent:"center",
   flexDirection:"row",
    
    borderRadius: 16,
    height:30 ,
    backgroundColor: "#349eb6",
  },
  info: {
   overflow:"hidden",
    padding: 10,
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20
    
   
  },
  image: {
    width: 120,
    height: 120,
  },
  textBtn: {
    textAlign: "center",
    color: "#fff",
    fontSize:14,
     fontFamily:"Ghibli-Regular"
    
  },
  separator:{
    height: 1,
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  marginVertical:12,
  width: '100%',
  }
})