import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const GecmisScreen = () => {
  const navigation = useNavigation();

  const goToAnaSayfaScreen = () => {
    navigation.navigate('AnaSayfa');
  };

  const goToFavorilerScreen = () => {
    navigation.navigate('Favoriler');
  };

  const goToSepetScreen = () => {
    navigation.navigate('Sepet');
  };

  const goToProfilScreen = () => {
    navigation.navigate('Profil');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Gecmis</Text>
      

      <View style={styles.bottomButtons}>
      <TouchableOpacity style={styles.button} onPress={goToAnaSayfaScreen}>
          <Icon name="home-outline" size={24} color="#333" />
          <Text style={styles.buttonText}>Ana Sayfa</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={goToFavorilerScreen}>
          <Icon name="heart-outline" size={24} color="#333"/>
          <Text style={styles.buttonText}>Favoriler</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={goToSepetScreen}>
          <Icon name="cart-outline" size={24} color="#333" />
          <Text style={styles.buttonText}>Sepetim</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={goToProfilScreen}>
          <Icon name="person-outline" size={24} color="#333" />
          <Text style={styles.buttonText}>Profilim</Text>
        </TouchableOpacity>
      </View>
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
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  button: {
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
});

export default GecmisScreen;