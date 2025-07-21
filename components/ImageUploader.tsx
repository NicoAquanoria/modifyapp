import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, ActivityIndicator, ViewStyle, TextStyle } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export interface ImageUploaderProps {
  imageUri?: string;
  onImagePicked: (uri: string) => void;
  placeholder?: string;
  style?: ViewStyle;
  editable?: boolean;
  loading?: boolean;
  error?: string;
  placeholderStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  imageUri,
  onImagePicked,
  placeholder = 'Upload Image',
  style,
  editable = true,
  loading = false,
  error,
  placeholderStyle,
  textStyle,
}) => {
  const [internalLoading, setInternalLoading] = React.useState(false);

  const pickImage = async () => {
    if (!editable || loading) return;
    setInternalLoading(true);
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });
      if (!result.canceled && result.assets && result.assets[0]?.uri) {
        onImagePicked(result.assets[0].uri);
      }
    } catch (e) {
      // Error handled via error prop
    } finally {
      setInternalLoading(false);
    }
  };

  const showLoading = loading || internalLoading;

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={[styles.uploader, !editable && styles.disabled, placeholderStyle]}
        onPress={pickImage}
        activeOpacity={editable ? 0.8 : 1}
        disabled={!editable || showLoading}
      >
        {showLoading ? (
          <ActivityIndicator size="large" color="#6C63FF" />
        ) : imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} resizeMode="cover" />
        ) : (
          <View style={styles.placeholderBox}>
            <Text style={[styles.placeholder, textStyle]}>{placeholder}</Text>
          </View>
        )}
      </TouchableOpacity>
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 12,
  },
  uploader: {
    width: 140,
    height: 140,
    borderRadius: 16,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  disabled: {
    opacity: 0.5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
  placeholderBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  placeholder: {
    color: '#A0A0A0',
    fontSize: 16,
    fontWeight: '500',
  },
  error: {
    color: '#FF4D4F',
    fontSize: 13,
    marginTop: 8,
    textAlign: 'center',
  },
}); 