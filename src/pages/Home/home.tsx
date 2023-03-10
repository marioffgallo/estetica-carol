import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { AuthContext } from '../../api/contexts/auth.contexts';
import CustomHeader from '../../components/Header/header';
import ProductCardList from '../../components/ProductCardList/product-card-list.component';
import { UserAuthContextType } from '../../constants/model/user.model';

const Home: React.FC = ({}) => {
  return (
    <View style={styles.background}>
      <CustomHeader/>
      <ProductCardList></ProductCardList>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  }
});

export default Home;
