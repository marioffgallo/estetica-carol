import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {AuthContext} from '../api/contexts/auth.contexts';
import { ProductCardData } from '../constants/model/product-card.model';
import {UserAuthContextType} from '../constants/model/user.model';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

function Routes() {
  const {signed, loading} = React.useContext(
    AuthContext,
  ) as UserAuthContextType;

  if (loading) {
    return (
      <View style={styles.loadingScreen}>
        <ActivityIndicator size="large" color="#131313" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}

const styles = StyleSheet.create({
  loadingScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Home: undefined;
  Profile: undefined;
  ProductScreen: {productCard: ProductCardData};
};

export default Routes;
