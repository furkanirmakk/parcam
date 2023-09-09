import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from './src/actions/favoritesActions';
import { addToCart } from './src/actions/cartActions'; // Eklediğimiz yeni import
import { useState } from 'react';

const AnaSayfaScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favorites);
  

  const ProductItem = ({ imageSource, name, price, about }) => {
    const cart = useSelector(state => state.cart.cart);
    const isFavorite = favorites.filter(x=>x.name==name).length>0;
     

    const toggleFavorite = () => {
      if (isFavorite) {
        dispatch(removeFavorite({"name":name,"price":price,"imageSource":imageSource}));
        console.log(`${name} ürünü favorilerden çıkarıldı.`);
      } else {
       dispatch(addFavorite({"name":name,"price":price,"imageSource":imageSource}));
       // dispatch(addFavorite(name));
        console.log(`${name} ürünü favorilere eklendi.`);
        console.log(`${price} ürünü favorilere eklendi.`);
      }
    };

    const handleAddToCart = () => {
      dispatch(addToCart({"name":name,"price":price,"imageSource":imageSource})); // Redux eylemi tetikle
      console.log(`${name} ürünü sepete eklendi.`);
    };

 const handleProductPress = () => {
    navigation.navigate("DetayScreen", {"name":name,"price":price,"imageSource":imageSource, "about":about});
    console.log(`${name} ürününün detay sayfasına gidildi.`);
  };




  
    return (
      <View style={styles.productItem}>
        <TouchableOpacity onPress={() => handleProductPress(name, price)}>
          <Image source={imageSource} style={styles.productImage} />
        </TouchableOpacity>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productPrice}>{price}</Text>
        <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteButton}>
          <Icon
            name={isFavorite ? 'heart' : 'heart-outline'}
            size={24}
            color={isFavorite ? 'red' : 'black'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAddToCart} style={styles.addToCartButton}>
          <Text style={styles.addToCartButtonText}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
    );
  };

 

  return (


    <View style={styles.container}>



      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.row}>


          <ProductItem
           
            imageSource={require('./src/assets/frendiski.png')}
            name="Fren Diski"
            price="100 TL"
            about="furkan"
          />

          <ProductItem
            imageSource={require('./src/assets/indir.jpeg')}
            name="Akü"
            price="150 TL"
            about="furkan"

          />

          <ProductItem
            imageSource={require('./src/assets/radyatör.png')}
            name="Radyatör"
            price="150 TL"
            about="furkan"
          />
          <ProductItem
            imageSource={require('./src/assets/motoryağı.png')}
            name="Motor Yağı"
            price="150 TL"
            about="furkan"
          />
          <ProductItem
            imageSource={require('./src/assets/camsuyu.png')}
            name="Cam Suyu"
            price="150 TL"
            about="furkan"
          />
          <ProductItem
            imageSource={require('./src/assets/antifriz.png')}
            name="Antifriz"
            price="150 TL"
            about="furkan"
          />
          <ProductItem
            imageSource={require('./src/assets/sağlık.png')}
            name="Sağlık Seti "
            price="150 TL"
            about="furkan"
          />
          <ProductItem
            imageSource={require('./src/assets/indir.jpeg')}
            name="Ürün 2"
            price="150 TL"
            about="furkan"

          />

          {/* Diğer ürünler */}
        </View>
      </ScrollView>

     
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

  scrollContent: {
    flexGrow: 1,

    justifyContent: 'center',
  },
  productItem: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
    marginTop: 20,
    marginBottom: 10,
    marginEnd: 3,
    marginStart: 3,
    width: '48%',
    backgroundColor: 'white',
  },
  productImage: {
    marginTop: 20,
    width: 150,
    height: 150,
  },
  productName: {
    fontSize: 18,
    marginTop: 10,
  },
  productPrice: {
    fontSize: 16,
    color: 'gray',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },


  loginBtn: {
    width: "80%",
    backgroundColor: "#F69101",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 0,
  },
  loginText: {
    color: "white",
    fontWeight: 'bold',
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  addToCartButton: {
    marginTop: 10,
    backgroundColor: '#F69101',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  addToCartButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});


export default AnaSayfaScreen;
