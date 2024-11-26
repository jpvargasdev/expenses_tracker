import { StyleSheet, Platform, SafeAreaView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { Category, getCategories } from '@/api';
import { useAxios } from '@/hooks/useCategories';

export default function HomeScreen() {
  const { cancel, data, error, loaded } = useAxios<Category[]>(getCategories)

  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="subtitle">Total Income:</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="subtitle">Net Balance:</ThemedText>
        <HelloWave />
      </ThemedView>


      <ThemedView style={styles.titleContainer}>
        <ThemedText type="subtitle">Expenses:</ThemedText>
        <ThemedText type="default">{JSON.stringify(data)}</ThemedText>
        <HelloWave />
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff' 
  }
});
