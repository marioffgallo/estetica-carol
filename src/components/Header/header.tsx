import { DrawerActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

const CustomHeader: React.FC = () => {
  const navigation = useNavigation();

  return(
    <SafeAreaView style={styles.headerContainer}>
      <TouchableWithoutFeedback onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <View style={styles.buttonBack}>
          <Text style={{fontSize: 20, fontWeight:'bold' }}>Menu</Text>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    height: 60,
    backgroundColor: '#fff'
  },
  buttonBack: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 15,
  }
});

export default CustomHeader;