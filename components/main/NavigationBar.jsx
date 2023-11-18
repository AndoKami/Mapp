import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();
// Screens
import Home from './screens/Home/Home';
import Calendars from './screens/Calendar/Calendar';
import Contact from './screens/Contact/Contact';

//Screen names
const home = 'Accueil';
const calendar = 'Calendrier';
const Contacts = 'Contact';
const chat = 'Chat';

const Tab = createBottomTabNavigator();

function NavigationBar() {
  return (
    <Tab.Navigator
      initialRouteName={home}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;

          if (rn === home) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === calendar) {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (rn === Contacts) {
            iconName = focused ? 'people' : 'people-outline';
          } else if (rn === chat) {
            iconName = focused ? 'mail' : 'mail-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#ff5757',
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: {paddingBottom: 10, fontSize: 10},
        tabBarStyle: [{display: 'flex', height: '11%'}, null],
      })}>
      <Tab.Screen name={home} component={Home} />
      <Tab.Screen name={calendar} component={Calendars} />
      <Tab.Screen name={Contacts} component={Contact} />
      <Tab.Screen name={chat} component={Home} />
    </Tab.Navigator>
  );
}

export default NavigationBar;
