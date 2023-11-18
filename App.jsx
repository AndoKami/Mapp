import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './components/loginScreen/Welcome';
import Register from './components/loginScreen/Register';
import Login from './components/loginScreen/Login';
import Introduction from './components/loginScreen/introduction/Introduction';
import CreateProfile from './components/loginScreen/introduction/profile/CreateProfile';
import Choice from './components/loginScreen/introduction/choice/choice';
import Greetings from './components/loginScreen/introduction/greeting/Greetings';
import NavigationBar from './components/main/NavigationBar';
function App() {
  let Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Bienvenue" component={Welcome} />
        <Stack.Screen name="Inscription" component={Register} />
        <Stack.Screen name="Connexion" component={Login} />
        <Stack.Screen name="introduction" component={Introduction} />
        <Stack.Screen name="Creation" component={CreateProfile} />
        <Stack.Screen name="Choix" component={Choice} />
        <Stack.Screen name="Salutation" component={Greetings} />
        <Stack.Screen name="Navigation" component={NavigationBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
