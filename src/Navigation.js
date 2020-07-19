import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import CartButton from './componentes/CartButton';

import StoreScreen from './screens/Store';
import CartScreen from './screens/Cart';
import UserScreen from './screens/User';

const Tab = createBottomTabNavigator();
const icons = {
  Store: {
    lib: FontAwesome5,
    name: 'shopping-bag',
  },

  Cart: {
    lib: FontAwesome5,
    name: 'shopping-bag',
  },

  User: {
    lib: FontAwesome5,
    name: 'user-alt',
  },
};

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === 'Cart') {
            return (
              <CartButton
                onPress={() => navigation.navigate('Cart')}
                focused={focused}
              />
            );
          }
          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#fff', //cor da barra
          borderTopColor: 'rgba(255,255,255,0.2)',
          paddingBottom: 4,
        },
        activeTintColor: '#356abc', //cor ativa
        inactiveTintColor: '#92929c', //cor inativa
      }}
    >
      <Tab.Screen
        name="Store"
        component={StoreScreen}
        options={{ title: 'Store' }}
      />

      <Tab.Screen name="Cart" component={CartScreen} options={{ title: '' }} />

      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{ title: 'User' }}
      />
    </Tab.Navigator>
  );
}
