import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { fontWeight } from 'styled-system';

const ProfilScreen = () => {
  const navigation = useNavigation();

  
  const goToGuncelScreen = () => {
    navigation.navigate('Guncel');
  }
  const goToGecmisScreen = () => {
    navigation.navigate('Gecmis');
  }
  const goToKuponScreen = () => {
    navigation.navigate('Kupon');
  }

  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.loginBtn} onPress={goToGuncelScreen}>
          <Text style={styles.loginText}>GÜNCEL SİPARİŞLERİM</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={goToGecmisScreen}>
          <Text style={styles.loginText}>GEÇMİŞ SİPARİŞLERİM</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.loginBtn} onPress={goToKuponScreen} >
          <Text style={styles.loginText}>KUPONLARIM</Text>
        </TouchableOpacity>

      
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#F69101",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginBottom:50,
  },
  loginText:{
    color:"white",
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  

  container2: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
   
    
  },
  title: {
    textAlign: 'center',
    marginVertical: 8, 
    marginTop:10,
  },
  
  
});

export default ProfilScreen;
