import { StyleSheet, View, Image, Text, Alert, ImageBackground, Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"

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
      <ImageBackground source={{ uri: image }} style={{ width: "100%", height: "100%", justifyContent: "flex-end" }}>
        <View style={{ backgroundColor: "rgba(0, 0, 0, 0.6)",}}>

        <View style={styles.info}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.span}>{director}</Text>
            <Text style={styles.span}>{rt_score}</Text>
          </View>
        </View>

        <View>
          <View style={styles.ctnBtns}>
            <Pressable onPress={() => navigation.navigate('FilmPage', { filmId: id })} style={styles.btn}>
              <Text style={styles.textBtn}>Ver detalhes</Text>
            </Pressable>
            <Pressable onPress={handleToggleFavorite} style={styles.btn}>
              <Text style={styles.textBtn}>Favoritar</Text>
            </Pressable>
          </View>
        </View>



        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    width: "100%",
    height: 460,
    padding: 20,
    marginTop: 20,
    gap: 40,
  },
  title: {
    fontSize: 18,
    maxWidth:220,
    color: "#fff",
    
    
  },
  span: {
    fontSize: 14,
    color: "#fff",
  },
  ctnBtns: {
    gap: 7,
    padding:20
  },
  btn: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
    height: 48,
    backgroundColor: "#72bf91",
  },
  info: {
    flexDirection: "row",
    padding: 25,
    
   
  },
  image: {
    width: 120,
    height: 120,
  },
  textBtn: {
    textAlign: "center",
    color: "#fff",
    fontSize:14
  },
})