import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { removeFavorite } from '../actions/favoritesActions';
import { addToCart } from '../actions/cartActions';

const FavorilerScreen = () => {
  const favorites = useSelector(state => state.favorites.favorites);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({"name":name,"price":price,"imageSource":imageSource})); // Redux eylemi tetikle
    console.log(`${name} ürünü sepete eklendi.`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.imageSource} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name }</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>
      <TouchableOpacity onPress={handleAddToCart} style={styles.addToCartButton}>
          <Text style={styles.addToCartButtonText}>Sepete Ekle</Text>
        </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleFavorite(item)} style={styles.favoriteButton}>
        <Icon
          name={(favorites.includes(item)) ? 'heart' : 'heart-outline'}
          size={24}
          color={(favorites.includes(item)) ? 'red' : 'black'}
        />
      </TouchableOpacity>
    </View>
  );

  const toggleFavorite = (item) => {
    if (favorites.includes(item)) {
      dispatch(removeFavorite(item));
      console.log(`${item} ürünü favorilerden çıkarıldı.`);
    } else {
      // Ekleme işlemi burada gerçekleştirilir.
    }
  };

  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <Text style={styles.emptyCartText}>Favori ürününüz bulunmamaktadır.</Text>
      ) : (
      <FlatList
        data={favorites}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.flatList}
      />
      )}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  flatList: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: 'gray',
  },
  addToCartButton: {
    backgroundColor: '#F69101',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  addToCartButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  emptyCartText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default FavorilerScreen;
