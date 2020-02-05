# Specifications

## NodeJS:

```
node@12.14.1
yarn@1.21.1
```


## React:

```
- react@16.9.0
- react-native@0.61.5


Requis:
- Android 4.1 (API 16)
- iOS 10.0

```

## Utiliser des icones

Yakoi utilise des icones présents dans [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) plus précisemement _Material Community Icons_.

- Modifier `android/app/build.gradle` et ajouter: 
```
project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf', 'MaterialCommunityIcons.ttf' ]
]
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

- Utilisation:
```javascript
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="rocket" size={30} color="#900" />;
```

## React Navigation

[Documentation React Navigation](https://reactnavigation.org/docs/en/4.x/tab-based-navigation.html)

