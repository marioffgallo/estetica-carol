import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../pages/Home/home';

const AppDrawer = createDrawerNavigator();

const AppRoutes: React.FC = ({}) => {
  return (
    <AppDrawer.Navigator screenOptions={{drawerStyle: {backgroundColor: '#c6cbef', width: 240}}}>
      <AppDrawer.Screen name="Home" component={Home}/>
    </AppDrawer.Navigator>
  );
};

export default AppRoutes;
