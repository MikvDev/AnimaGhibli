
import { StyleSheet,View, Image, Text, Button} from "react-native"

type cardFilmProp = {
image: string
title: string
description: string
director: string
rt_score: number
}

export function CardFilm({image, title, description, director, rt_score}: cardFilmProp){

    return (
        <View style={styles.container}>
            <View style={styles.info} >
                <Image source={{uri:image}} style={styles.image}/>
                <View style={{marginLeft:20}} >

                <Text style={styles.title}>{title}</Text>
                <Text style={styles.span}>{director}</Text>
                <Text style={styles.span}>{rt_score}</Text>
                </View>
            </View>
            <View>
                <View style={styles.ctnBtns}>
                <Button title="Ver detalhes"/>
                <Button title="Favoritar"/>

                </View>
            </View>


        </View>
    )

}

const styles = StyleSheet.create({
    container :{
        backgroundColor: '#808080',
        width:"100%",
        height:300,
        padding:20,
        marginTop:20,
        gap:40
    },
    title: {
        fontSize:24,
    },
    span:{
        fontSize:18
    },
    ctnBtns: {
        gap:7
    },
    info:{
        
        flexDirection:"row",
    },
    image:{
        width:120,
        height:120,
    }
})