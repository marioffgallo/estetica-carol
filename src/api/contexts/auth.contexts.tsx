import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {User, UserAuthContextType, UserType} from '../../constants/model/user.model';
import {Alert} from 'react-native';
import {FirebaseError} from '../../constants/model/firebase-error.model';

export const AuthContext = React.createContext<UserAuthContextType | null>(
  null,
);

function AuthProvider({children}: any) {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [loadingAuth, setLoadingAuth] = React.useState<boolean>(false);

  React.useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem('Auth_user');

      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }

      setLoading(false);
    }

    loadStorage();
  }, []);

  async function setStorageUser(user: User) {
    await AsyncStorage.setItem('Auth_user', JSON.stringify(user));
  }

  async function signIn(email: string, password: string) {
    setLoadingAuth(true);

    await auth()
      .signInWithEmailAndPassword(email, password)
      .then(async value => {
        const uid = value.user.uid;

        await firestore()
          .collection('users')
          .doc(uid)
          .get()
          .then(response => {
            const user: User = {
              uid: uid,
              name: response.data()?.name,
              email: value.user.email ?? '',
              phone: response.data()?.phone ?? '',
              type: response.data()?.type,
            };

            setUser(user);
            setStorageUser(user);
            setLoadingAuth(false);
          });
      })
      .catch((error: FirebaseError) => {
        Alert.alert('Erro ao fazer login', error.message);
        setLoadingAuth(false);
      });
  }

  async function signUp(
    email: string,
    password: string,
    name: string,
    phone: string,
  ) {
    setLoadingAuth(true);

    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async value => {
        const user: User = {
          uid: value.user.uid,
          name: name,
          email: email,
          phone: phone,
          type: 0,
        };

        await firestore()
          .collection('users')
          .doc(user.uid)
          .set(user)
          .then(() => {
            setUser(user);
            setStorageUser(user);
            setLoadingAuth(false);
          });
      })
      .catch((error: FirebaseError) => {
        Alert.alert('Erro ao cadastrar email', error.message);
        setLoadingAuth(false);
      });
  }

  async function resetPasswordByEmail(email: string) {
    setLoadingAuth(true);

    await auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert('Reset de senha solicitado', 'Enviado próximos passos no e-mail cadastrado');
        setLoadingAuth(false);
      })
      .catch((error: FirebaseError) => {
        Alert.alert('Erro ao cadastrar email', error.message);
        setLoadingAuth(false);
      });
  }

  async function updateUser(
    email: string,
    name: string,
    phone: string,
    password: string
  ) {
    setLoadingAuth(true);

    try {
      if(user!.email != email){
        await auth().signInWithEmailAndPassword(user!.email, password)
        .then(async (userFirebase) => {
          await userFirebase.user.updateEmail(email);  
        })
      }

      await firestore()
      .collection('users')
      .doc(user?.uid)
      .update({
        name: name,
        phone: phone,
        email: email
      })
      .then(() => {
        let newUser: User = {
          uid: user?.uid!,
          name: name,
          email: email,
          phone: phone,
          type: UserType.CLIENT
        }
  
        setUser(newUser);
        setStorageUser(newUser);
        setLoadingAuth(false);
  
        Alert.alert('Dados atualizados com sucesso!');
      })
    }
    catch(error) {
      let err = error as FirebaseError;

      Alert.alert('Erro ao atualizar dados', err.message);
      setLoadingAuth(false);
    };
  }

  async function logout() {
    await auth().signOut();
    await AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        loading,
        loadingAuth,
        signUp,
        signIn,
        logout,
        resetPasswordByEmail,
        updateUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
