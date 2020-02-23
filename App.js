import React from 'react';

// Navigation
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

// Screens
import Scan from './screens/Scan';
import Historique from './screens/Historique';

// Assets
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from './assets/Styles';

// Navigation routes
const routes = {
  Scan: Scan,
  Historique: Historique,

  // NOM_ONGLET: COMPOSANT_ONGLET
};

const defaultNavigationOptions = ({ navigation }) => {
  /** @returns Icône en fonction de l'onglet actif */
  return {
    tabBarIcon: ({ tintColor }) => {
      let iconName;
      const { routeName } = navigation.state;

      switch (routeName) {
        case 'Scan':
          iconName = 'barcode-scan';
          break;

        case 'Historique':
          iconName = 'history';
          break;

        /*
        case 'NOM_ONGLET':
          iconName = 'NOM_ICONE';
          break;
        */

        default:
          iconName = 'cat';
          break;
      }

      return <Icon name={iconName} size={24} color={tintColor} />;
    },
  };
};

const TabNavigator = createBottomTabNavigator(routes, {
  initialRouteName: 'Scan',
  order: ['Historique', 'Scan'],

  tabBarComponent: props => <BottomTabBar {...props} />,

  defaultNavigationOptions,

  tabBarOptions: {
    activeTintColor: Colors.orange,
    inactiveTintColor: Colors.gray,
  },
});

const App = createAppContainer(TabNavigator);

console.disableYellowBox = true;

export default App;
