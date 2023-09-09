import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../actions/cartActions';

const SepetScreen = () => {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  const renderCartItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.imageSource} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => dispatch(decreaseQuantity(item))}>
          <Text style={styles.quantityButton}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => dispatch(increaseQuantity(item))}>
          <Text style={styles.quantityButton}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => dispatch(removeFromCart(item))} style={styles.removeButton}>
        <Text style={styles.removeButtonText}>Ürünü Çıkar</Text>
      </TouchableOpacity>
    </View>
  );

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <View style={styles.container}>
      {cart.length === 0 ? (
        <Text style={styles.emptyCartText}>Sepetinizde ürün bulunmamaktadır.</Text>
      ) : (
        <React.Fragment>
          <View style={styles.totalQuantityContainer}>
            <Text style={styles.totalQuantityText}>Toplam Ürün Sayısı: {totalQuantity}</Text>
          </View>
          <FlatList
            data={cart}
            renderItem={renderCartItem}
            keyExtractor={(item, index) => index.toString()}
            style={styles.flatList}
          />
        </React.Fragment>
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
    width: '100%',
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
  emptyCartText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    fontSize: 20,
    paddingHorizontal: 10,
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  removeButton: {
    backgroundColor: '#FF0000',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 10,
  },
  removeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  totalQuantityContainer: {
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#fff',
  },
  totalQuantityText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SepetScreen;
