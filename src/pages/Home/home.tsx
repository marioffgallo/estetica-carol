import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { AuthContext } from '../../api/contexts/auth.contexts';
import { UserAuthContextType } from '../../constants/model/user.model';

const Home: React.FC = ({}) => {
  const { logout } = React.useContext(
    AuthContext,
  ) as UserAuthContextType;

  function exit(){
    Alert.alert('Usuario deslogando');
    logout();
  }

  return (
    <View style={styles.background}>
      <Text>TELA HOME</Text>
      <Button
        onPress={() => exit()}
        title="Logout"
        color="#841584"/>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  }
});

export default Home;
