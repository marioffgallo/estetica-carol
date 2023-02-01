import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../pages/Home/home';
import CustomDrawer from '../components/CustomDrawer/custom-drawer.component';
import Profile from '../pages/Profile/profile';
import ProductScreen from '../pages/ProductScreen/product-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AppDrawer = createDrawerNavigator();
const AppStack = createNativeStackNavigator();

const Main: React.FC = () => {
  return(
    <AppStack.Navigator
    >
      <AppStack.Screen name="Home" component={Home} options={{
          title: 'Home',
          headerShown: false
        }}/>
      <AppDrawer.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{
          title: 'Informações sobre o Serviço',
          headerTitleStyle:{color: 'red'}
        }}
      />
    </AppStack.Navigator>
  )
}

const AppRoutes: React.FC = () => {
  return (
    <AppDrawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#171717',
        },
        drawerLabelStyle: {
          fontWeight: 'bold',
        },
        drawerActiveTintColor: '#fff',
        drawerActiveBackgroundColor: '#00b94a',
        drawerInactiveBackgroundColor: '#000',
        drawerInactiveTintColor: '#ddd',
        drawerItemStyle: {
          marginVertical: 5,
        },
      }}>
      <AppDrawer.Screen name="Main" component={Main} options={{headerShown: false, title: 'Home'}} />
      <AppDrawer.Screen name="Profile" component={Profile} />
    </AppDrawer.Navigator>
  );
};

export default AppRoutes;
