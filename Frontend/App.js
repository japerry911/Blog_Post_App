import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from './src/context/BlogContext';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreationScreen from './src/screens/CreationScreen';
import EditScreen from './src/screens/EditScreen';
import HomeScreen from './src/screens/HomeScreen';

const navigator = createStackNavigator({
  Index: IndexScreen,
  Show: ShowScreen,
  Creation: CreationScreen,
  Edit: EditScreen,
  Home: HomeScreen
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Skylord\'s Blogs',
  }
});

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};