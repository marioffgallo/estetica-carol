import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard
} from 'react-native';
import {AuthContext} from '../../api/contexts/auth.contexts';
import {UserAuthContextType} from '../../constants/model/user.model';
import {RootStackParamList} from '../../routes/routes';

type signInScreenProp = NativeStackNavigationProp<RootStackParamList, 'SignUp'>;

const SignIn: React.FC = ({}) => {
  const navigation = useNavigation<signInScreenProp>();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {signIn, loadingAuth} = React.useContext(
    AuthContext,
  ) as UserAuthContextType;

  function handleLogin() {
    Keyboard.dismiss();
    signIn(email, password);
  }

  return (
    <View style={styles.background}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.areaInput}>
          <TextInput
            style={styles.input}
            placeholderTextColor="rgba(255,255,255,0.20)"
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
            placeholderTextColor="rgba(255,255,255,0.20)"
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
            value={password}
            onChangeText={(text: string) => setPassword(text)}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleLogin}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#fff" />
          ) : (
            <Text style={styles.submitText}>Acessar</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.link}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.linkText}>Criar uma Conta!</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#131313',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 15,
  },
  areaInput: {
    flexDirection: 'row',
  },
  input: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: '90%',
    fontSize: 17,
    color: '#fff',
    marginBottom: 15,
    padding: 10,
    borderRadius: 7,
  },
  submitButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00b94a',
    width: '90%',
    height: 45,
    borderRadius: 7,
    marginTop: 10,
  },
  submitText: {
    fontSize: 20,
    color: '#131313',
  },
  link: {
    marginTop: 5,
    marginBottom: 9,
  },
  linkText: {
    color: '#fff',
  },
});

export default SignIn;
