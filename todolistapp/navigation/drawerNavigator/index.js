import React, {useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabNavigator} from '../../navigation';

import {HeaderDrawer} from '../../components';

const Drawer = createDrawerNavigator();

const listScreen = ['Home', 'Home1', 'Home2', 'Home3'];

const DrawerNavigator = () => {
  const [screenIndex, setScreenIndex] = useState(0);

  const handleChangeScreen = (index) => {
    console.log('run:', index);
    setScreenIndex(index);
  };

  // console.log(screenSelect);
  // console.log(Drawer);

  const renderScreen = () => {
    return (
      <Drawer.Screen
        name={listScreen[screenIndex]}
        component={TabNavigator}
        // initialParams={{screenName: screenSelect}}
        initialParams={{
          screenIndex,
        }}
      />
    );
  };

  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <HeaderDrawer
          handleChangeScreen={handleChangeScreen}
          screenIndex={screenIndex}
          {...props}
        />
      )}>
      {renderScreen()}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
