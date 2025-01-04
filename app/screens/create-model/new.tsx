import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';

export default function NewModelScreen() {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    // Request permissions
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    // Launch image picker
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Model</Text>
      <Text style={styles.description}>
        This is where you'll create a new 3D model from scratch.
      </Text>

      <TouchableOpacity 
        style={styles.imagePickerCard}
        onPress={pickImage}
      >
        {image ? (
          <Image 
            source={{ uri: image }} 
            style={styles.imagePreview}
            resizeMode="cover"
          />
        ) : (
          <Text style={styles.imagePickerText}>Please Add Photo</Text>
        )}
      </TouchableOpacity>
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
    marginBottom: 20,
  },
  imagePickerCard: {
    width: '100%',
    aspectRatio: 4/3,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#e0e0e0',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  imagePickerText: {
    fontSize: 18,
    color: '#666',
    fontWeight: '500',
  },
  imagePreview: {
    width: '100%',
    height: '100%',
  },
});
