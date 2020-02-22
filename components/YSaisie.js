import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Colors } from '../assets/Styles';

export default class YSaisie extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.text_input}
          placeholder={this.props.placeholder || ''}
          keyboardType={this.props.keyboardType || 'default'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginVertical: 4,
  },

  text_input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 4,
    textAlign: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
