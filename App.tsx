import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import House from 'lucide-react-native/icons/house';
import BookMarked from 'lucide-react-native/icons/book-marked';
import CircleUser from 'lucide-react-native/icons/circle-user';
import Home from './pages/Home';
import User from './pages/User';
import FavoritePage from './pages/FavoritePage';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FilmPage from './pages/FilmPage';
import { useFonts } from 'expo-font';

export default function App() {
  const Tab = createBottomTabNavigator()
  
  
  
  return (
      <SafeAreaProvider>
      <NavigationContainer style={{}}>
      <Tab.Navigator screenOptions={{headerShown:false}} >
        <Tab.Screen 
        name='Home'
        component={Home}
         options={{
            tabBarIcon: ({ color, size }) => (
              <House  size={size} color={color} />
            ),
            tabBarStyle: {backgroundColor:"#000"},
            tabBarActiveTintColor:"#a5a865"
          }}
        />
        <Tab.Screen 
        name='Favorites'
        
        component={FavoritePage}
         options={{
            tabBarIcon: ({ color, size }) => (
              <BookMarked  size={size} color={color} />
            ),
            
          }}
        />
        <Tab.Screen 
        name='User'
        component={User}
         options={{
            tabBarIcon: ({ color, size }) => (
              <CircleUser  size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen 
        name='FilmPage'
        component={FilmPage}
         options={{
            tabBarIcon: ({ color, size }) => (
              <CircleUser  size={size} color={color} />
            ),
          }}
        />



      </Tab.Navigator>
        
      </NavigationContainer>
        
      </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
