import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { Colors } from '../assets/Styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class YIcone extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, size, color } = this.props;

    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.4}
          style={[{ padding: this.props.padding || 0 }, styles.bouton]}
          onPress={() => this.props.fonction()}>
          <Icon
            name={name || 'cat'}
            size={size || 24}
            color={color || Colors.grey}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bouton: {
    backgroundColor: Colors.white,
    borderRadius: 100,
  },
});

export default YIcone;
