import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {CalculatorScreen} from './screens/CalculatorScreen';

function App() {
  return (
    <View>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />

      <CalculatorScreen />
    </View>
  );
}

export default App;
