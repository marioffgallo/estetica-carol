import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../../api/contexts/auth.contexts';
import {UserAuthContextType} from '../../constants/model/user.model';

const CustomDrawer: React.FC<DrawerContentComponentProps> = props => {
  const {user, logout} = React.useContext(AuthContext) as UserAuthContextType;

  return (
    <DrawerContentScrollView>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://seeklogo.com/images/A/android-icon-logo-DB06FA8B39-seeklogo.com.png',
          }}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Bem-vindo</Text>

        <Text style={styles.name}>{user && user.name}</Text>
      </View>

      <DrawerItemList {...props} />

      <DrawerItem
        {...props}
        label="Sair"
        inactiveBackgroundColor="#c62c36"
        onPress={() => logout()}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  logo: {
    width: 85,
    height: 85,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    marginTop: 5,
  },
  name: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    paddingBottom: 25,
  },
});

export default CustomDrawer;
