/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Login, Home, ModalAdd} from './screen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Icon} from 'native-base';
import {DrawerNavigator} from './navigation';

import {AddbuttonModal} from './components';

const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  const changeWhenLoginTrue = () => {
    setLogin(true);
  };
  const [isLogin, setLogin] = useState(false);

  // console.log('islogin', isLogin);
  // if (!isLogin) {
  //   return <Login changeWhenLoginTrue={changeWhenLoginTrue} />;
  // }

  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({

// });

export default App;
