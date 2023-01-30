import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import Routes from './src/routes/routes';
import AuthProvider from './src/api/contexts/auth.contexts';

export type Props = {};

const App: React.FC<Props> = ({}) => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#131313" barStyle="light-content" />
        <Routes></Routes>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
