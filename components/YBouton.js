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
    alignItems: 'center',
    marginVertical: 4,
  },

  bouton: {
    backgroundColor: Colors.orange,
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderRadius: 4,
  },

  bouton__texte: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: Colors.white,
  },
});

export default YBouton;
