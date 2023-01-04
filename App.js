import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Main from './screen/main';
import Viewr from './screen/View';
import {Provider} from 'react-redux';
import Store from './Redux/redux';
const stack = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen
            options={{
              headerShown: false,
              tabBarIcon: () => {
                return <Icon name="home-outline" size={25} />;
              },
            }}
            name="Home"
            component={Main}
          />
          <stack.Screen
            options={{
              headerShown: false,
              tabBarIcon: () => {
                return <Icon name="wine-outline" size={25} />;
              },
            }}
            name="View"
            component={Viewr}
          />
        </stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
