import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const [isHusbandSelected, setIsHusbandSelected] = useState(false); // Track husband selection
  const [isWifeSelected, setIsWifeSelected] = useState(false); // Track wife selection
  const [isKidSelected, setIsKidSelected] = useState(false); // Track wife selection


  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerShown: false, // Hide navbar for all screens in the stack
        }}
      >
        {/* Index Screen */}
        <Stack.Screen
          name="index"
          options={{ headerShown: false }} // Explicitly hide navbar on index.tsx
        />

        {/* Navigate to the husband tabs only after selecting husband */}
        {isHusbandSelected && (
          <Stack.Screen
            name="(tabs)/husband" // Navigate to the husband tab folder
            options={{ headerShown: false }} // Hide navbar for all husband screens
          />
        )}

        {/* Navigate to the wife tabs only after selecting wife */}
        {isWifeSelected && (
          <Stack.Screen
            name="(tabs)/wife" // Navigate to the wife tab folder
            options={{ headerShown: false }} // Hide navbar for all wife screens
          />
        )}

        {/* Navigate to the husband tabs only after selecting kid */}
        {isKidSelected && (
          <Stack.Screen
            name="(tabs)/kid" // Navigate to the husband tab folder
            options={{ headerShown: false }} // Hide navbar for all husband screens
          />
        )}

        {/* Set headerShown: false for other screens */}
        <Stack.Screen name="startpage" options={{ headerShown: false }} />
        <Stack.Screen name="camera" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}