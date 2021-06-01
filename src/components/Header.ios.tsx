import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191932',
  },
  header: {
    paddingBottom: 44,
    backgroundColor: '#191932',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#E1E1E6',
    fontFamily: 'Poppins-Regular',
  }
});
