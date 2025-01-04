import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const user = "John"; // Replace with your actual user data
const recentModels = [
  { id: '1', name: 'Modern House', created: '2 hours ago' },
  { id: '2', name: 'Futuristic Car', created: '5 hours ago' },
  { id: '3', name: 'Robot Design', created: '1 day ago' },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, {user}</Text>
      </View>

      {/* 3D Creation Card */}
      <View style={styles.creationCard}>
        <Ionicons name="cube" size={48} color="#6366f1" />
        <Text style={styles.creationText}>Create 3D Image Here</Text>
      </View>

      {/* Recent Models List */}
      <View style={styles.recentContainer}>
        <Text style={styles.sectionTitle}>Recent 3D Models</Text>
        {recentModels.map((model) => (
          <View key={model.id} style={styles.listItem}>
            <View style={styles.modelHeader}>
              <Ionicons name="cube-outline" size={20} color="#6366f1" />
              <Text style={styles.itemTitle}>{model.name}</Text>
            </View>
            <Text style={styles.itemDescription}>Created {model.created}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  header: {
    marginBottom: 30,
  },
  greeting: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  creationCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 30,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    aspectRatio: 1.5,
  },
  creationText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#6366f1',
    marginTop: 15,
  },
  modelHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  recentContainer: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 15,
  },
  listItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
