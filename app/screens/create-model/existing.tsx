import { View, Text, StyleSheet } from "react-native";

export default function ExistingModelScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Existing Model</Text>
      <Text style={styles.description}>
        This is where you'll import an existing 3D model file.
      </Text>
      {/* TODO: Add file import functionality */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
});
