import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Layouts/Header';

export default function HomeScreen() {
  return (
    <>
    <View style={{ flex: 1 }}>
      <Header />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({});
