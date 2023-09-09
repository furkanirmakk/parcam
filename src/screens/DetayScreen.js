import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const DetayScreen = ({ route }) => {
  const { name, price, imageSource, about } = route.params;

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.text}>Ürün Adı: {name}</Text>
      <Text style={styles.text}>Fiyat: {price}</Text>
      <Text style={styles.text}>Ürün Bilgisi: {about}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    
    marginBottom: 10,

    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default DetayScreen;
