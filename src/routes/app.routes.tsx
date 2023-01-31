import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../pages/Home/home';
import CustomDrawer from '../components/CustomDrawer/custom-drawer.component';

const AppDrawer = createDrawerNavigator();

const AppRoutes: React.FC = () => {
  return (
    <AppDrawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#171717'
        },
        drawerLabelStyle: {
          fontWeight: 'bold'
        },
        drawerActiveTintColor: '#fff',
        drawerActiveBackgroundColor: '#00b94a',
        drawerInactiveBackgroundColor: '#000',
        drawerInactiveTintColor: '#ddd',
        drawerItemStyle: {
          marginVertical: 5
        }   
      }}
    >
      <AppDrawer.Screen name="Home" component={Home} />
    </AppDrawer.Navigator>
  );
};

export default AppRoutes;
