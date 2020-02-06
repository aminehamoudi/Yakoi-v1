import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

// Navigation
import { createStackNavigator } from 'react-navigation-stack';

// Screens
import FicheProduit from './FicheProduit';

class ScanScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Scan </Text>

        <Button
          title="Aller sur fiche produit" 
          onPress={() => this.props.navigation.push('FicheProduit')} />
      </View>
    );
  }
}

const Scan = createStackNavigator({
  ScanScreen,
  FicheProduit
});

export default Scan;