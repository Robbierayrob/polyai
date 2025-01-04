import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link, useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function CreateModelScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#6366f1" />
        </TouchableOpacity>
        <Text style={styles.title}>Create 3D Model</Text>
      </View>

      {/* Options */}
      <View style={styles.optionsContainer}>
        <Link href="/screens/create-model/new" asChild>
          <TouchableOpacity style={styles.optionCard}>
            <Ionicons name="add-circle" size={32} color="#6366f1" />
            <Text style={styles.optionTitle}>Create New Model</Text>
            <Text style={styles.optionDescription}>
              Start from scratch with a new 3D model
            </Text>
          </TouchableOpacity>
        </Link>

        <Link href="/screens/create-model/existing" asChild>
          <TouchableOpacity style={styles.optionCard}>
            <Ionicons name="folder-open" size={32} color="#6366f1" />
            <Text style={styles.optionTitle}>Add Existing Model</Text>
            <Text style={styles.optionDescription}>
              Import an existing 3D model file
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  header: {
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  backButton: {
    padding: 8,
    marginRight: 10,
  },
  optionsContainer: {
    gap: 20,
  },
  optionCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    alignItems: 'center',
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
    color: '#1a1a1a',
    textAlign: 'center',
  },
  optionDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});
