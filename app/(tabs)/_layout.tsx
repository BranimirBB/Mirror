import { Tabs } from 'expo-router';  // Importing Tabs from expo-router to create bottom tab navigation
import React from 'react';  // Importing React to create the component

import { TabBarIcon } from '@/components/navigation/TabBarIcon';  // Importing the custom TabBarIcon component to render icons for tabs
import { Colors } from '@/constants/Colors';  // Importing color constants for styling based on the color scheme
import { useColorScheme } from '@/hooks/useColorScheme';  // Importing a custom hook to get the current color scheme (light or dark)

export default function TabLayout() {
  const colorScheme = useColorScheme();  // Using the custom hook to get the current color scheme (light or dark)

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,  // Dynamically setting the active tab icon color based on color scheme
        headerShown: false,  // Hiding the header for all screens in this layout
      }}>
      {/* Set Start Page as the initial screen */}
      <Tabs.Screen
        name="startpage"  // Unique identifier for the "Start Page" tab
        options={{
          title: 'Start Page',  // Title displayed on the tab
        }}
      />
      {/* Other Tab Screens */}
      <Tabs.Screen
        name="index"  // Unique identifier for the "Home" tab
        options={{
          title: 'Page 1',  // Title displayed on the tab
        }}
      />
      <Tabs.Screen
        name="explore"  // Unique identifier for the "Explore" tab
        options={{
          title: 'Page 2',  // Title displayed on the tab
        }}
      />
      <Tabs.Screen
        name="camera"  // Unique identifier for the "Camera" tab
        options={{
          title: 'Mirror',  // Title displayed on the tab
        }}
      />
    </Tabs>
  );
}