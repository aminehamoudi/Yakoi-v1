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
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { Typography, Colors } from '../assets/Styles';

class YProduit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      produit: {
        code: '154635463', // code-barres
        image_url: 'https://i.picsum.photos/id/906/536/354.jpg', // url miniature
        titre: 'Granola', // nom du produit
        marque: 'LU', // marque du produit
        calories: '75', // nombre de kcal au 100g
        nutriscore: '', // niveau de transformation
        quantite: '50g', // taille portion ou rien en g ou mL
      },
    };
  }

  render() {
    const produit = this.state.produit;

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
        <Image style={styles.miniature} source={{ uri: produit.image_url }} />

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
          <View style={styles.pastille}>
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
