// Styles globales de l'application

import { StyleSheet } from 'react-native';

// Couleurs utilisées dans l'application
export const Colors = {
  black: '#000',
  white: '#ffffff',
  gray: '#a3a8a3',

  yellow: '#FECB02',
  orange: '#f96302',
  light_orange: '#EE8100',
  green: '#038141',
  light_green: '#85BB2F',
  red: '#E63E11',

  // NUTRISCORE:
  nutriscore: {
    A: '#038141', // green
    B: '#85BB2F',
    C: '#FECB02',
    D: '#F96302',
    E: '#E63E11',
  },
};

// Typographie
export const Typography = StyleSheet.create({
  h1: {
    marginBottom: 8,
    paddingHorizontal: 16,
    paddingTop: 12,
    fontSize: 30,
    fontWeight: 'bold',
  },

  h2: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  text: {
    fontSize: 14,
  },

  small: {
    fontSize: 12,
  },

  message: {
    paddingHorizontal: 16,
    color: Colors.gray,
    fontSize: 12,
  },
});
