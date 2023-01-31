import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Alert
} from 'react-native';
import {AuthContext} from '../../api/contexts/auth.contexts';
import {UserAuthContextType} from '../../constants/model/user.model';

const Profile: React.FC = () => {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');

  const [password, setPassword] = React.useState('');

  const {user, loadingAuth, updateUser} = React.useContext(
    AuthContext,
  ) as UserAuthContextType;

  React.useEffect(() => {
    async function loadUserInfo() {
      setName(user?.name ?? '');
      setPhone(user?.phone ?? '');
      setEmail(user?.email ?? '');
      setPassword('');
    }

    loadUserInfo();
  }, []);

  function handleUpdateUser(){
    if(!password){
      Alert.alert('Digite sua senha para prosseguir');
    } else {
      Alert.alert('Deseja atualizar seus dados cadastrais?', '', [
        {
          text: 'Não',
          style: 'cancel'
        },
        {
          text: 'Sim',
          onPress: () => {
            Keyboard.dismiss();
            updateUser(email, name, phone, password);
            setPassword('');
          }
        }
      ])
    }
  }

  return (
    <View style={styles.background}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.areaInput}>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            autoCorrect={false}
            autoCapitalize="none"
            value={name}
            onChangeText={(text: string) => setName(text)}
          />
        </View>

        <View style={styles.areaInput}>
          <TextInput
            style={styles.input}
            placeholder="Telefone"
            keyboardType="numeric"
            autoCorrect={false}
            autoCapitalize="none"
            value={phone}
            onChangeText={(text: string) => setPhone(text)}
          />
        </View>

        <View style={styles.areaInput}>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={(text: string) => setEmail(text)}
          />
        </View>

        <View style={styles.areaInput}>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            autoCorrect={false}
            autoCapitalize="none"
            value={password}
            onChangeText={(text: string) => setPassword(text)}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity
          style={styles.changePasswordButton}
          onPress={handleUpdateUser}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#fff" />
          ) : (
            <Text style={styles.changePasswordText}>Atualizar perfil</Text>
          )}
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  areaInput: {
    flexDirection: 'row',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 222, 0.8)',
    width: '90%',
    fontSize: 17,
    marginBottom: 15,
    padding: 10,
    borderRadius: 7,
  },
  changePasswordButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00b94a',
    width: '90%',
    height: 45,
    borderRadius: 7,
    marginTop: 10,
  },
  changePasswordText: {
    fontSize: 20,
    color: '#131313',
  },
});

export default Profile;
