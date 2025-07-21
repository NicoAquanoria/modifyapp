import React from 'react';
import { Button } from './Button';
import { View } from 'react-native';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => (
  <View style={{ padding: 16 }}>
    <Button title="Primary" onPress={() => {}} />
  </View>
);

export const Secondary = () => (
  <View style={{ padding: 16 }}>
    <Button title="Secondary" variant="secondary" onPress={() => {}} />
  </View>
);

export const Outline = () => (
  <View style={{ padding: 16 }}>
    <Button title="Outline" variant="outline" onPress={() => {}} />
  </View>
);

export const Disabled = () => (
  <View style={{ padding: 16 }}>
    <Button title="Disabled" disabled onPress={() => {}} />
  </View>
); 