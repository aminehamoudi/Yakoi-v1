import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { Colors } from '../assets/Styles';

class YBouton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.bouton}
          onPress={() => this.props.fonction()}>
          <Text style={styles.bouton__texte}>{this.props.children}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    alignItems: 'center',
  },

  bouton: {
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: Colors.orange,
  },

  bouton__texte: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default YBouton;
