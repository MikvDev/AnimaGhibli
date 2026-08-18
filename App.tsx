import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import House from 'lucide-react-native/icons/house';
import BookMarked from 'lucide-react-native/icons/book-marked';
import CircleUser from 'lucide-react-native/icons/circle-user';
import Home from './pages/Home';
import User from './pages/User';
import FavoritePage from './pages/FavoritePage';

export default function App() {
  const Tab = createBottomTabNavigator()
  return (
    
      <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen 
        name='Home'
        component={Home}
         options={{
            tabBarIcon: ({ color, size }) => (
              <House  size={size} color={color} />
            ),
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



      </Tab.Navigator>
        
      </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
