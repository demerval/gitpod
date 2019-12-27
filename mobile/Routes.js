import Home from './pages/Home';
import Page1 from './pages/Page1';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const Routes = createStackNavigator(
  {
    Home: Home,
    Page1: Page1,
  },
  {
    initialRouteName: 'Home',
    headerMode: "none",
  }
);

const AppContainer = createAppContainer(Routes);

export default AppContainer;