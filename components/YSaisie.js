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
          {...this.props}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    paddingHorizontal: 16,
  },

  text_input: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 4,
    fontSize: 16,
    textAlign: 'center',
  },
});
