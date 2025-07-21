import { getStorybookUI, configure } from '@storybook/react-native';
import { AppRegistry } from 'react-native';
import { name as appName } from '../app.json';

// Import stories
configure(() => {
  require('../components/Button.stories');
  // Add more stories here
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

AppRegistry.registerComponent(appName, () => StorybookUIRoot);

export default StorybookUIRoot; 