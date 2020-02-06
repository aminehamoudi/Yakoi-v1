import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class FicheProduit extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> FicheProduit </Text>
        <Button 
          title="Retour"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
