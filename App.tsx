import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import House from 'lucide-react-native/icons/house';
import BookMarked from 'lucide-react-native/icons/book-marked';
import Bookmark from 'lucide-react-native/icons/bookmark';
import CircleUser from 'lucide-react-native/icons/circle-user';
import Sprout from 'lucide-react-native/icons/sprout';
import Home from './pages/Home';
import User from './pages/User';
import FavoritePage from './pages/FavoritePage';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FilmPage from './pages/FilmPage';
import { useFonts } from 'expo-font';


const myTheme ={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    
  }
}

export default function App() {
  const Tab = createBottomTabNavigator()
  const [fontsLoaded] = useFonts({
    'Ghibli-Bold': require('./assets/fonts/Eyad Al-Samman - Ghibli-Bold.otf'),
    'Ghibli-Regular': require('./assets/fonts/Eyad Al-Samman - Ghibli.otf'),
  });
  
  
  return (
      <SafeAreaProvider>
      <NavigationContainer theme={myTheme}>
      <Tab.Navigator screenOptions={{headerShown:false, 
        tabBarStyle: {
           backgroundColor:"#fff", borderTopColor:"#fff",
           
           
            
        },
        tabBarLabelStyle:{fontFamily:"Ghibli-Regular"},
        tabBarActiveTintColor:"#349eb6",
      }} >
        <Tab.Screen 
        name='Home'
        component={Home}
         options={{
            tabBarIcon: ({ color, size }) => (
              <Sprout size={size} color={color} />
            ),
            
            
            
          }}
        />
        <Tab.Screen 
        name='Favorites'
        
        component={FavoritePage}
         options={{
            tabBarIcon: ({ color, size }) => (
              <Bookmark  size={size} color={color} />
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
            ),tabBarButton: () => null,
              tabBarItemStyle: { display: 'none' },
            
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
