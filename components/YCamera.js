import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Alert } from 'react-native';

// Components
import { RNCamera } from 'react-native-camera';
import { Colors } from '../assets/Styles';

export default class YCamera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barcode: '',
    };
  }

  render() {
    return (
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ flex: 1 }}
        type={RNCamera.Constants.Type.back}
        pendingAuthorizationView={
          <View style={styles.chargement_container}>
            <ActivityIndicator size="large" color={Colors.orange} />
          </View>
        }
        androidCameraPermissionOptions={{
          title: "Permission d'utiliser la caméra",
          message:
            "Gagnez du temps avec le scan de code-barres à l'aide de votre appareil-photo !",
          buttonPositive: "D'accord",
          buttonNegative: 'Non !',
        }}
        notAuthorizedView={
          <View>
            <Text>Pas de caméra, pas de scan ! 😜</Text>
          </View>
        }
        onBarCodeRead={data => {
          const barcode = data.data;

          if (barcode !== this.state.code) {
            this.setState({
              barcode,
            });

            this.props.codebarresLu(barcode);
          }
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  chargement_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
