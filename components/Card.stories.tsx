import React from 'react';
import { Card } from './Card';
import { View, Alert } from 'react-native';

const placeholderImage = { uri: 'https://via.placeholder.com/300x140.png?text=Image' };

export default {
  title: 'Card',
  component: Card,
};

export const Default = () => (
  <View style={{ padding: 16 }}>
    <Card title="Default Card" content="This is a simple card with a title and content." />
  </View>
);

export const Interactive = () => (
  <View style={{ padding: 16 }}>
    <Card
      title="Interactive Card"
      content="Tap this card to see an action."
      onPress={() => Alert.alert('Card pressed!')}
    />
  </View>
);

export const WithImage = () => (
  <View style={{ padding: 16 }}>
    <Card
      title="Card with Image"
      content="This card displays a cover image."
      image={placeholderImage}
    />
  </View>
);

export const Loading = () => (
  <View style={{ padding: 16 }}>
    <Card loading title="Loading Card" />
  </View>
); 