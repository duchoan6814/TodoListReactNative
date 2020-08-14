import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'native-base';

import {Home, Login, ModalAdd} from '../../screen';
import {AddbuttonModal} from '../../components';

const Tab = createBottomTabNavigator();

const TabNavigator = ({route, navigation}) => {
  const {handleChangeScreen} = route.params;

  return (
    <Tab.Navigator
      initialRouteName={route.name}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Home1') {
            iconName = focused ? 'checkbox-sharp' : 'checkbox-outline';
          } else if (route.name === 'Home2') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Home3') {
            iconName = focused
              ? 'information-circle'
              : 'information-circle-outline';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Home1" component={Home} />
      <Tab.Screen
        name="Add"
        component={ModalAdd}
        options={{tabBarButton: () => <AddbuttonModal />}}
      />
      <Tab.Screen name="Home2" component={Home} />
      <Tab.Screen name="Home3" component={Login} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
