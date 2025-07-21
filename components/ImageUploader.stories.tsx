import React, { useState } from 'react';
import { ImageUploader } from './ImageUploader';
import { View, Alert } from 'react-native';

const sampleImage = 'https://via.placeholder.com/140x140.png?text=Uploaded';

export default {
  title: 'ImageUploader',
  component: ImageUploader,
};

export const Default = () => {
  const [imageUri, setImageUri] = useState<string | undefined>(undefined);
  return (
    <View style={{ padding: 16 }}>
      <ImageUploader
        imageUri={imageUri}
        onImagePicked={setImageUri}
        placeholder="Upload Image"
      />
    </View>
  );
};

export const Loading = () => (
  <View style={{ padding: 16 }}>
    <ImageUploader loading onImagePicked={() => {}} />
  </View>
);

export const Uploaded = () => (
  <View style={{ padding: 16 }}>
    <ImageUploader imageUri={sampleImage} onImagePicked={() => {}} />
  </View>
);

export const Error = () => (
  <View style={{ padding: 16 }}>
    <ImageUploader error="Upload failed. Please try again." onImagePicked={() => {}} />
  </View>
); 