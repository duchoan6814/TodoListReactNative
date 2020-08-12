import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabNavigator} from '../../navigation';

import {HeaderDrawer} from '../../components';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <HeaderDrawer {...props} />}>
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        initialParams={{screenName: 'Home'}}
      />
      <Drawer.Screen
        name="Pass task"
        component={TabNavigator}
        initialParams={{screenName: 'Home1'}}
      />
      <Drawer.Screen
        name="Profile"
        component={TabNavigator}
        initialParams={{screenName: 'Home2'}}
      />
      <Drawer.Screen
        name="Infor"
        component={TabNavigator}
        initialParams={{screenName: 'Home3'}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
