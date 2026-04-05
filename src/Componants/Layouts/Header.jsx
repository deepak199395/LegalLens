import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      
      {/* Left: Title */}
      <Text style={styles.title}>LegalLens</Text>

      {/* Right: Logo */}
      <View style={styles.rightContainer}>
        <Image
          source={require('../../Assets/legalLensLogo.jpeg')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 65,
    backgroundColor: '#1E1E2C',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    elevation: 6, // Android shadow
  },

  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 1,
  },

  rightContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});