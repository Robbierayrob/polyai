import { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

export default function NewModelScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);

  const takePhoto = async () => {
    if (!permission?.granted) {
      await requestPermission();
      return;
    }
    setIsCameraActive(true);
  };

  const handleCapture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setImage(photo.uri);
      setIsCameraActive(false);
    }
  };

  const pickImage = async () => {
    try {
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
    } catch (error) {
      console.error('Error picking image:', error);
      alert('There was an error selecting an image. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Model</Text>
      <Text style={styles.description}>
        This is where you'll create a new 3D model from scratch.
      </Text>

      <View style={[styles.imageContainer, isCameraActive && {flex: 1}]}>
        {isCameraActive ? (
          <View style={[styles.cameraContainer, {marginBottom: 0}]}>
            <CameraView
              style={styles.cameraPreview}
              facing="back"
              ref={cameraRef}
            >
              <TouchableOpacity 
                style={styles.captureButton}
                onPress={handleCapture}
              >
                <Ionicons name="camera" size={32} color="#fff" />
              </TouchableOpacity>
            </CameraView>
          </View>
        ) : (
          <>
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
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    width: '100%',
    marginBottom: 16,
  },
  cameraPreview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  captureButton: {
    backgroundColor: '#34C759',
    padding: 16,
    borderRadius: 50,
    marginBottom: 20,
  },
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
    minHeight: 300,
    maxHeight: 500,
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
    minHeight: 300,
    maxHeight: 500,
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
