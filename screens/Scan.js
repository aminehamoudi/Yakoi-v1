import React, { Component } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';

// Navigation
import { createStackNavigator } from 'react-navigation-stack';

// Screens
import FicheProduit from './FicheProduit';

// Components
import YSaisie from '../components/YSaisie';
import YBouton from '../components/YBouton';
import YProduit from '../components/YProduit';
import YCamera from '../components/YCamera';

// Assets
import { Typography, Colors } from '../assets/Styles';

// Utils
// import rechercherProduit from '../utils/rechercherProduit';

class ScanScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '', // '7622210601988',
      loading: false,
      dernier_produit: {},
      precedent: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.codebarresLu = this.codebarresLu.bind(this);
  }

  handleSubmit() {
    this.setState({
      loading: true,
    });

    const { code } = this.state;

    console.log('> Recherche du produit n°' + code + ' ...');

    // Si chaine vide
    if (code === '') {
      return;
    }

    const URL = `https://world.openfoodfacts.org/api/v0/product/${code}.json`;

    fetch(URL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          loading: false,
        });

        const { status } = res;

        // Si produit trouvé
        if (status) {
          this.setState({
            precedent: true,
            dernier_produit: res.product,
          });

          // Alert.alert('🐶 Produit trouvé ', product_name);
          this.props.navigation.navigate('FicheProduit', {
            code: res.code,
            produit: res.product,
          });
        } else {
          throw new Error('Aucun produit trouvé avec le code ' + code);
        }
      })
      .catch(err => {
        console.log(err);

        Alert.alert(
          '😕 Aucun produit trouvé ',
          "Le code-barres fourni n'existe pas dans la base de données OpenFoodFacts. Vérifiez le code-barres.",
        );
      });
  }

  handleInput(text) {
    this.setState({
      code: text.trim(),
    });
  }

  codebarresLu(code) {
    this.setState({
      code,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[Typography.h1]}>Scan</Text>
        </View>

        <View style={styles.camera__container}>
          <YCamera codebarresLu={this.codebarresLu} />
        </View>

        <View style={styles.formulaire}>
          <Text style={styles.label}>
            {this.state.loading && '🔮 Recherche en cours... 🔮'}
            {!this.state.loading && 'Scannez ou saisissez un code-barres:'}
          </Text>

          <YSaisie
            placeholder="code-barres"
            keyboardType="number-pad"
            onChangeText={this.handleInput}
            value={this.state.code}
          />

          <YBouton fonction={this.handleSubmit}>Rechercher</YBouton>
        </View>

        {this.state.precedent && (
          <View style={styles.dernier_produit}>
            <Text style={Typography.small}>Dernier produit recherché:</Text>
            <YProduit
              produit={this.state.dernier_produit}
              enAppuyant={() =>
                this.props.navigation.navigate('FicheProduit', {
                  produit: this.state.dernier_produit,
                })
              }
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  header: {
    zIndex: 1000,
    backgroundColor: Colors.white,
  },

  camera__container: {
    flex: 1,
    marginBottom: 4,
    overflow: 'hidden',
    backgroundColor: Colors.white,
  },

  formulaire: {
    zIndex: 1000,
    marginVertical: 4,
    paddingVertical: 8,
    backgroundColor: Colors.white,
  },

  label: {
    marginBottom: 8,
    textAlign: 'center',
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
