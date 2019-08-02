import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/Main';
import Cart from './pages/Cart';

import Header from './components/Header';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Cart,
    },
    {
      defaultNavigationOptions: navigation => ({
        header: <Header {...navigation} />,
      }),
      cardStyle: {
        backgroundColor: '#000',
      },
    }
  )
);

export default Routes;
