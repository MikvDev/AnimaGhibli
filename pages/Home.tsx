import {  StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView,SafeAreaProvider } from 'react-native-safe-area-context'

const Home = () => {
  return (
   
      <SafeAreaProvider>
        <SafeAreaView style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            
                <Text>Home</Text>


        </SafeAreaView>
      </SafeAreaProvider>
    
  )
}

export default Home

const styles = StyleSheet.create({})