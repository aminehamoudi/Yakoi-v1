// YProduit.js

/*
  Produit:
    - code:       <String>  code-barres
    - titre:      <String>  nom du produit
    - marque:     <String>  marque du produit
    - calories:   <Int>     nombre de kcal au 100g
    - quantite:   <Int>     taille d'une portion en g ou ml (si disponible)
    - nutriscore: <Letter>  niveau de transformation
*/

import * as React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

// Assets
import { Typography, Colors } from '../assets/Styles';
import { APPLE_ICON } from '../assets/images/Images';

class YProduit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      produit: {
        code: '123456', // code-barres
        image_url: APPLE_ICON, // url miniature
        titre: 'Produit anonyme', // nom du produit
        marque: '', // marque du produit
        calories: '0', // nombre de kcal au 100g
        nutriscore: '', // niveau de transformation
        quantite: '0g', // taille portion ou rien en g ou mL
      },
    };

    this.formaterProduit = this.formaterProduit.bind(this);
  }

  formaterProduit(produitJSON) {
    let {
      product_name: titre,
      brands: marque,
      image_url,
      serving_size: quantite,
      nutriscore_grade: nutriscore,
    } = produitJSON;
    const calories = produitJSON.nutriments.energy_serving;

    nutriscore = nutriscore ? nutriscore.toUpperCase() : '';

    console.log(nutriscore);

    const produit_formate = {
      titre: titre || this.state.titre,
      marque: marque || this.state.marque,
      image_url: image_url || this.state.image_url,
      calories: calories || 0,
      quantite: quantite || '0g',
      nutriscore,
    };

    return produit_formate;
  }

  render() {
    console.clear();
    let produit = this.state.produit;
    const produitJSON = this.props.produit;

    if (produitJSON) {
      produit = this.formaterProduit(produitJSON);
    }

    return (
      <TouchableOpacity
        activeOpacity={this.props.enAppuyant ? 0.6 : 1}
        style={styles.produit}
        onPress={() => {
          if (this.props.enAppuyant) {
            this.props.enAppuyant();
          }
        }}>
        {/* MINIATURE */}
        <Image
          style={styles.miniature}
          source={{ uri: produit.image_url }}
          resizeMethod="resize"
          resizeMode="contain"
        />

        {/* INFORMATIONS */}
        <View style={styles.info}>
          <View style={styles.info__identite}>
            <Text style={Typography.h2} numberOfLines={1} ellipsizeMode="tail">
              {produit.titre}
            </Text>
            <Text style={[styles.info__marque, Typography.small]}>
              {produit.marque}
            </Text>
          </View>

          <Text>
            {produit.quantite}, {produit.calories} kcal
          </Text>
        </View>

        {/* NUTRISCORE */
        produit.nutriscore !== '' && (
          <View
            style={[
              styles.pastille,
              { backgroundColor: Colors.nutriscore[produit.nutriscore] },
            ]}>
            <Text style={styles.nutriscore}>{produit.nutriscore}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  produit: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 10,
    backgroundColor: Colors.white,
  },

  miniature: {
    width: 75,
    height: 75,
    borderRadius: 4,
  },

  info: {
    flex: 1,
    marginHorizontal: 10,
  },

  info__titre: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  info__marque: {
    color: '#a3a8a3',
  },

  info__identite: {
    flex: 1,
  },

  pastille: {
    alignSelf: 'center',
    width: 32,
    height: 32,
    backgroundColor: Colors.gray,
    borderRadius: 100,
  },

  nutriscore: {
    color: Colors.white,
    lineHeight: 32,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default YProduit;
