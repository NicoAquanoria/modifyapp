import React from 'react';
import { useState } from 'react';
import StorybookUIRoot from './storybook';
import { Slot } from 'expo-router';

const SHOW_STORYBOOK = false; // Set to true to show Storybook

export default function App() {
  if (SHOW_STORYBOOK) {
    return <StorybookUIRoot />;
  }
  return <Slot />;
} 