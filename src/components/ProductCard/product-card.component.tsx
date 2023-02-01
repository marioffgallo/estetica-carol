import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {ProductCardData} from '../../constants/model/product-card.model';
import {RootStackParamList} from '../../routes/routes';

type productScreenPageProps = NativeStackNavigationProp<
  RootStackParamList,
  'ProductScreen'
>;

const ProductCard = ({productCard}: {productCard: ProductCardData}) => {
  const navigation = useNavigation<productScreenPageProps>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{productCard.name}</Text>

      <Image
        source={{uri: `${productCard.sourceImg}`}}
        style={styles.photo}
        resizeMode="cover"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('ProductScreen', {productCard: productCard})
        }>
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
    marginRight: 13,
    backgroundColor: '#fff',
    height: 500,
    width: 350,
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
    height: 300
  },
  button: {
    height: 50,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffc0cb',
  },
  buttonText: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default ProductCard;
