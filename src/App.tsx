import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {CalculatorScreen} from './screens/CalculatorScreen';
import {styles} from './config/app-theme';

function App() {
  return (
    <View style={styles.background}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />

      <CalculatorScreen />
    </View>
  );
}

export default App;
