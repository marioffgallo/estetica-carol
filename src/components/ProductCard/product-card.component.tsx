import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {ProductCardData} from '../../constants/model/product-card.model';

const ProductCard = ({productCard}: {productCard: ProductCardData}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{productCard.name}</Text>

      <Image source={{uri: `${productCard.sourceImg}`}} 
      style={styles.photo} 
      resizeMode="cover"
      />

      <TouchableOpacity style={styles.button} onPress={() => console.log('clicou')}>
        <Text style={styles.buttonText}>Mais Informações</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginLeft: 13,
    backgroundColor: '#fff',
    height: 500,
    borderColor: '#000000',
    borderRadius: 10,
    shadowColor: '#171717',
    elevation: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  photo: {
    width: 350,
    height: 300,
    margin: 10
  },
  button: {
    height: 50,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffc0cb'
  },
  buttonText: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#ffffff'
  }
});

export default ProductCard;
