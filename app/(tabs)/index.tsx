import { Text, View, StyleSheet } from 'react-native';
import { VStack } from "@/components/ui/vstack"
import { HStack } from "@/components/ui/hstack"

export default function Index() {
  return (
    <VStack style={styles.container}>
      <HStack></HStack>
      <HStack></HStack>
      <HStack></HStack>
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
