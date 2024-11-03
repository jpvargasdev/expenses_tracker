import { View, Text, StyleSheet } from 'react-native';

export default function NotFound() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>404</Text>
      <Text style={styles.message}>Page Not Found</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#333',
  },
  message: {
    fontSize: 24,
    marginTop: 20,
    color: '#666',
  },
});
