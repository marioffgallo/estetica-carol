import {useRoute} from '@react-navigation/native';
import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import CustomHeader from '../../components/Header/header';
import {ProductCardData} from '../../constants/model/product-card.model';

const ProductScreen: React.FC = () => {
  const route = useRoute();
  let {productCard} = route.params as {productCard: ProductCardData};

  return (
    <ScrollView
      style={styles.background}
      contentContainerStyle={[
        {alignItems: 'center'},
        {justifyContent: 'space-around'},
      ]}
      showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>{productCard.name}</Text>

      <Image
        source={{uri: `${productCard?.sourceImg}`}}
        style={styles.photo}
        resizeMode="cover"
      />

      <Text style={styles.description}>{productCard.description}</Text>

      <Text style={styles.price}>Valor: R$ {productCard.price.toFixed(2)}</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Agendar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'column',
    margin: 15,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: '#fff',
    borderColor: '#000000',
    borderRadius: 10,
    shadowColor: '#171717',
    elevation: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  photo: {
    width: '100%',
    height: 300,
    marginTop: 10,
    marginBottom: 20,
  },
  description: {
    fontSize: 20,
    fontWeight: 'normal',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
    flexWrap: 'wrap',
  },
  price: {
    fontSize: 20,
    fontWeight: 'normal',
    margin: 30,
  },
  button: {
    height: 50,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffc0cb',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default ProductScreen;
