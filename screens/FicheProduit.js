import React, { Component } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';

// Composants
import YProduit from '../components//YProduit';
import YBouton from '../components/YBouton';
import YIcone from '../components/YIcone';

// Assets
import { Typography, Colors } from '../assets/Styles';

class FicheProduit extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.alert = this.alert.bind(this);
  }

  alert() {
    Alert.alert(
      '✅ Produit ajouté !',
      "Vous pouvez désormais retrouver ce produit dans l'onglet Suivi.",
      [
        {
          text: 'Annuler',
          onPress: () => console.log('Annuler'),
          style: 'cancel',
        },
        { text: "D'accord", onPress: () => console.log('OK Pressed') },
      ],
    );
  }

  render() {
    const code = this.props.navigation.getParam('code');
    const produit = this.props.navigation.getParam('produit');

    console.log('FICHE: ' + code);

    if (produit) {
      console.log('FP got produit');
    }

    return (
      <View style={styles.container}>
        {/* EN TETE */}
        <View style={styles.en_tete}>
          <YIcone
            name="arrow-left"
            size={24}
            color={Colors.orange}
            fonction={this.props.navigation.goBack}
          />
          <Text style={Typography.h1}>Fiche produit</Text>
        </View>

        <View style={styles.produit__container}>
          <YProduit code={code} produit={produit} />
        </View>

        <YBouton fonction={this.alert}>+ Ajouter à ma consommation</YBouton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  produit__container: {
    paddingHorizontal: 16,
  },

  en_tete: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
});

export default FicheProduit;
