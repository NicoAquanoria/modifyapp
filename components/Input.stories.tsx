import React, { useState } from 'react';
import { Input } from './Input';
import { View } from 'react-native';

export default {
  title: 'Input',
  component: Input,
};

export const Default = () => {
  const [value, setValue] = useState('');
  return (
    <View style={{ padding: 16 }}>
      <Input placeholder="Enter text" value={value} onChangeText={setValue} label="Default" />
    </View>
  );
};

export const Focused = () => {
  const [value, setValue] = useState('');
  const [autoFocus, setAutoFocus] = useState(true);
  return (
    <View style={{ padding: 16 }}>
      <Input placeholder="Focused input" value={value} onChangeText={setValue} label="Focused" autoFocus={autoFocus} />
    </View>
  );
};

export const Disabled = () => (
  <View style={{ padding: 16 }}>
    <Input placeholder="Disabled input" value="" editable={false} label="Disabled" />
  </View>
);

export const Error = () => {
  const [value, setValue] = useState('');
  return (
    <View style={{ padding: 16 }}>
      <Input
        placeholder="Input with error"
        value={value}
        onChangeText={setValue}
        label="Error"
        error={value ? '' : 'This field is required'}
      />
    </View>
  );
};

export const Password = () => {
  const [value, setValue] = useState('');
  return (
    <View style={{ padding: 16 }}>
      <Input
        placeholder="Password"
        value={value}
        onChangeText={setValue}
        label="Password"
        secureTextEntry
      />
    </View>
  );
}; 