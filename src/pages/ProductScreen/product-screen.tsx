import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../api/contexts/auth.contexts';
import { ProductCardData } from '../../constants/model/product-card.model';
import { UserAuthContextType } from '../../constants/model/user.model';

const ProductScreen: React.FC<ProductCardData> = (productCard) => {
  const { user } = React.useContext(
    AuthContext,
  ) as UserAuthContextType;

  return (
    <View style={styles.background}>
      <Text>{ productCard.name }</Text>
      
      <Image
      source={{uri: ''}}
      style={styles.photo}
      />

      <Text>{ productCard.description }</Text>

      <Text>Valor: { productCard.price }</Text>

      <TouchableOpacity>Agendar</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
  },
  title: {

  },
  photo: {
    width: 100,
    heigth: 100,
  },
  description: {

  },
  price: {

  }
});

export default ProductScreen;
