import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';

export default function NewModelScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [cameraPermission, setCameraPermission] = useState<boolean | null>(null);

  const takePhoto = async () => {
    // Request camera permissions
    const { status } = await Camera.requestCameraPermissionsAsync();
    setCameraPermission(status === 'granted');
    
    if (status !== 'granted') {
      alert('Sorry, we need camera permissions to make this work!');
      return;
    }

    // Launch camera
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaType.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  };

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

      <View style={styles.imageContainer}>
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
            <View style={styles.placeholderContent}>
              <Ionicons name="add" size={48} color="#666" />
              <Text style={styles.imagePickerText}>Tap to add photo</Text>
            </View>
          )}
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.choosePhotoButton}
          onPress={pickImage}
        >
          <Ionicons name="image" size={20} color="#fff" />
          <Text style={styles.choosePhotoText}>Choose a Photo</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.cameraButton}
          onPress={takePhoto}
        >
          <Ionicons name="camera" size={20} color="#fff" />
          <Text style={styles.cameraButtonText}>Take a Photo</Text>
        </TouchableOpacity>
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
  imageContainer: {
    width: '100%',
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
    marginBottom: 16,
  },
  placeholderContent: {
    alignItems: 'center',
    gap: 8,
  },
  imagePickerText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  imagePreview: {
    width: '100%',
    height: '100%',
  },
  choosePhotoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 8,
  },
  choosePhotoText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  cameraButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#34C759',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  cameraButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
