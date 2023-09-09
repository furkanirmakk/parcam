import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, MaterialIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import {  applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './src/reducers'; // Reducer'larınızı burada bir araya getirin




import GirisScreen from './GirisScreen';
import AnaSayfaScreen from './AnaSayfaScreen';
import GuncelScreen from './src/screens/GuncelScreen';
import GecmisScreen from './src/screens/GecmisScreen';
import KuponScreen from './src/screens/KuponScreen';
import FavorilerScreen from './src/screens/FavorilerScreen';
import ProfilScreen from './src/screens/ProfilScreen';
import SepetScreen from './src/screens/SepetScreen';
import DetayScreen from './src/screens/DetayScreen';



const Tab = createBottomTabNavigator();
const HomeTabs = () => {
  return (

    <Tab.Navigator
    
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {

          if (route.name === 'AnaSayfa') return <Entypo name="home" size={24} color="black"  />;
          if (route.name === 'Favoriler') return <MaterialIcons name="favorite" size={24} color="black" />;
          if (route.name === 'Profil') return <Ionicons name="person" size={24} color="black" />;
          if (route.name === 'Sepet') return <FontAwesome5 name="shopping-basket" size={24} color="black" />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name='AnaSayfa' component={AnaSayfaScreen}  />
      <Tab.Screen name='Favoriler' component={FavorilerScreen} />
      <Tab.Screen name='Sepet' component={SepetScreen} />
      <Tab.Screen name='Profil' component={ProfilScreen} />

    </Tab.Navigator>
  )
}
const Stack = createStackNavigator();
const store = configureStore({
  reducer: rootReducer,
});
const App = () => {
  return (<Provider store={store}>
    {/* Uygulama bileşenleri */
  
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Giriş">
        <Stack.Screen name="Giriş" component={GirisScreen} />
        <Stack.Screen name='HomeTabs' component={HomeTabs} 
        options={{
          headerTintColor:'white',
          headerBackTitleVisible: false,
          headerStyle:{ backgroundColor:'#F69101'},
          headerTitle: () =>(
            <Text style={ {fontWeight:'bold', fontSize:25, color:'white'}}>
                PARÇAM
            </Text>
          )
        }}/>
        <Stack.Screen name="DetayScreen" component={DetayScreen} />
        <Stack.Screen name='Favoriler' component={FavorilerScreen} />
        <Stack.Screen name='Guncel' component={GuncelScreen} />
        <Stack.Screen name='Gecmis' component={GecmisScreen} />
        <Stack.Screen name='Kupon' component={KuponScreen} />
      </Stack.Navigator>
    </NavigationContainer>}
    </Provider>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
