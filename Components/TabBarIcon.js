import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Define the screens
function WWWScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>WWW</Text>
    </View>
  );
}

function ComputerScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Computer</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

let iconName;

export function TabBarIcon() {
  return (
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
          height: 60,
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
      })}
    >
      <Tab.Screen name="WWW" component={WWWScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Computer" component={ComputerScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
