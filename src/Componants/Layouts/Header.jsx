import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <>
      {/* Status Bar */}
      <StatusBar
        barStyle="light-content"
        backgroundColor="#0b0103c3"
      />

      {/* Header */}
      <View style={styles.container}>
        <Text style={styles.title}>LegalLens</Text>

        <Image
          source={require('../../Assets/legalLensLogo.jpeg')}
          style={styles.logo}
        />
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 90, // 👈 increased height to cover status bar
    paddingTop: 30, // 👈 push content below status bar
    backgroundColor: '#1E1E2C',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
   
  },

  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },

  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});