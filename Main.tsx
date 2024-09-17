import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import App from './App';

const Drawer = createDrawerNavigator();

function Main() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={App} />
        {/* Add other screens here */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Main;
