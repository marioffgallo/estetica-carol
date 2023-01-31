import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {ProductCardData} from '../../constants/model/product-card.model';
import ProductCard from '../ProductCard/product-card.component';
import firestore from '@react-native-firebase/firestore';

const ProductCardList: React.FC = () => {
  const [products, setProducts] = React.useState<ProductCardData[]>([]);

  React.useEffect(() => {
    async function loadProducts(){
      await firestore().collection('products').get()
      .then((snapshot) => {
        setProducts([]);

        snapshot.docs.forEach((item) => {
          const productToAdd: ProductCardData = {
            id: item.id,
            name: item.data().name,
            sourceImg: item.data().sourceImg,
            description: item.data().description,
            price: item.data().price
          };

          setProducts(oldArray => [...oldArray, productToAdd]);
        })
      })
    }

    loadProducts();
  }, []);

  if(products.length > 0){
    return (
      <View style={styles.background}>
        <FlatList
          contentContainerStyle={styles.listContent}
          horizontal={true}
          data={products}
          keyExtractor={item => item.id}
          renderItem={({item}) => <ProductCard productCard={item} />}
        />
      </View>
    );
  }

  return (
    <View style={styles.background}>
      <Text>Sem produtos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    margin: 5
  },
  listContent: {
   alignItems: 'center'
  }
});

export default ProductCardList;
