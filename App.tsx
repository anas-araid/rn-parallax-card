import { useFonts } from 'expo-font';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { Card } from './components/card';

const App = () => {
  const [fontsLoaded] = useFonts({
    'AttilaSansClassic-Medium': require('./assets/fonts/AttilaSansClassic-Medium.otf'),
    'NeueHaasUnicaPro-Regular': require('./assets/fonts/NeueHaasUnicaPro-Regular.otf')
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Containter>
        <Card />
      </Containter>
    </GestureHandlerRootView>
  );
};

const Containter = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default App;
