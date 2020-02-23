import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

// Composants
import YProduit from '../components/YProduit';
import FicheProduit from '../screens/FicheProduit';

// Assets
import { Typography } from '../assets/Styles';
import { FlatList } from 'react-native-gesture-handler';

class HistoriqueScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historique: [],
    };
  }

  render() {
    const { historique } = this.state;

    return (
      <View style={styles.container}>
        <Text style={Typography.h1}>Historique ({historique.length})</Text>

        <View style={styles.liste__container}>
          {/* SI AUCUN PRODUIT */}
          {!historique.length && (
            <Text style={Typography.message}>
              💡 Scannez des produits pour les retrouver ici !
            </Text>
          )}

          {/* SINON */}
          {historique.length > 0 && (
            <FlatList
              style={styles.liste}
              data={historique}
              renderItem={({ item: produit }) => (
                <YProduit
                  enAppuyant={() =>
                    this.props.navigation.navigate('FicheProduit')
                  }
                />
              )}
              keyExtractor={(_, index) => index.toString()}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  liste__container: {
    flex: 1,
    paddingVertical: 5,
  },

  liste: {
    paddingHorizontal: 16,
  },
});

const Historique = createStackNavigator({
  HistoriqueScreen: {
    screen: HistoriqueScreen,
    navigationOptions: {
      title: 'Historique',
      header: <View />,
    },
  },
  FicheProduit: {
    screen: FicheProduit,
    navigationOptions: {
      title: 'Fiche produit',
      headerTintColor: 'orange',
      header: <View />,
    },
  },
});

export default Historique;
