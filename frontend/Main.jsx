import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home"
import ProductDetails from './screens/ProductDetails';
import Toast from 'react-native-toast-message';
import Cart from './screens/Cart';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (

  <NavigationContainer>
    <Stack.Navigator 

    initialRouteName='Home'
    screenOptions={{ headerShown:false }}
    >
      <Stack.Group>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="productdetails" component={ProductDetails} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Group>
    </Stack.Navigator>

    <Toast position='top' />

  </NavigationContainer>
  )

}

export default Main