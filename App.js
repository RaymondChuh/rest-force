import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RestForce from './lib/rest-force';

export default class App extends React.Component {
  render() {
    let result = RestForce.connection({
      instanceUrl: 'https://raymondzhu01-dev-ed.my.salesforce.com',
      accessToken:
        '00D28000001Fo9P!ARoAQK1iha2IwdYs0USSS8S5GRxQXkEmcGMm1bLvSBv3y6BEhjFNtk5ySDPvJUHyVyU49WzBN0cMAId_YyNHQNc5cKdsFVkm'
    })
      .sobject('Account')
      .retrieve('0012800000Ns4Ph');

    console.log(result);

    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
