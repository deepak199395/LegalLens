import React from 'react';
import { StatusBar } from 'react-native';
import Navigation from './src/NavigationScreens/Navigation';

const App = () => {
  return (
    <>
      <StatusBar  hidden={true}/>
      <Navigation />
    </>
  );
};

export default App;