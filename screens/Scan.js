import React, { Component } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';

// Navigation
import { createStackNavigator } from 'react-navigation-stack';

// Screens
import FicheProduit from './FicheProduit';
import YSaisie from '../components/YSaisie';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import YBouton from '../components/YBouton';

import { Typography, Colors } from '../assets/Styles';
import YProduit from '../components/YProduit';

class ScanScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Text style={Typography.h1}>Scan</Text>

        <View style={styles.formulaire}>
          <Text style={{ textAlign: 'center', marginBottom: 8 }}>
            Scannez ou saisissez un code-barres:
          </Text>

          <YSaisie placeholder="code-barres" keyboardType="number-pad" />

          <YBouton
            fonction={() => {
              this.props.navigation.navigate('FicheProduit', {
                code: '123456',
              });
            }}>
            Rechercher
          </YBouton>
        </View>

        <View style={styles.dernier_produit}>
          <Text style={Typography.small}>Dernier produit recherché:</Text>
          <YProduit
            enAppuyant={() => this.props.navigation.navigate('FicheProduit')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formulaire: {
    marginVertical: 4,
  },

  dernier_produit: {
    marginVertical: 4,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
});

const Scan = createStackNavigator({
  ScanScreen: {
    screen: ScanScreen,
    navigationOptions: {
      title: 'Scan de produit',
      header: <View />,
    },
  },
  FicheProduit: {
    screen: FicheProduit,
    navigationOptions: {
      title: 'Fiche produit',
      header: <View />,
    },
  },
});

export default Scan;
