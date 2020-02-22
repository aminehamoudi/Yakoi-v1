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
};

// Typographie
export const Typography = StyleSheet.create({
  h1: {
    marginBottom: 8,
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingTop: 12,
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
});
