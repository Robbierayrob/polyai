import { View, Text, StyleSheet } from "react-native";

export default function NewModelScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Model</Text>
      <Text style={styles.description}>
        This is where you'll create a new 3D model from scratch.
      </Text>
      {/* TODO: Add model creation form */}
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
