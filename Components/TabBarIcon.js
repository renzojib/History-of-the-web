import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// Define the screens
import WorldWideWeb from './WorldWideWeb';
import ModernComputer from './ModernComputer';

const Tab = createBottomTabNavigator();

let iconName;

export default function TabBarIcon() {

  return (
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          iconName = '';

          if (route.name === 'WWW') {
            iconName = focused ? 'globe' : 'globe-outline';
          } else if (route.name === 'Computer') {
            iconName = focused ? 'laptop' : 'laptop-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#621708',
        tabBarInactiveTintColor: '#778DA9',
        tabBarStyle: {
          backgroundColor: '#FFEFD3',
          height: 85,
          paddingBottom: 15,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "CourierPrimeBold"
        },
      })}
    >
      <Tab.Screen name="WWW" component={WorldWideWeb} 
        options={{ headerShown: false }} 
      />
      <Tab.Screen name="Computer" component={ModernComputer} 
        options={{ headerShown: false }} 
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}


// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { View, Text } from 'react-native';

// // Import your screen components
// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'end', alignItems: 'center' }}>
//       <Text>Home</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'end', alignItems: 'center' }}>
//       <Text>Settings</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// const TabBarIcon = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = focused ? 'home' : 'home-outline';
//             } else if (route.name === 'Settings') {
//               iconName = focused ? 'settings' : 'settings-outline';
//             }

//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: 'blue',
//           tabBarInactiveTintColor: 'gray',
//         })}
//       >
//         <Tab.Screen name="Home" component={HomeScreen}/>
//         <Tab.Screen name="Settings" component={SettingsScreen}/>
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default TabBarIcon;

