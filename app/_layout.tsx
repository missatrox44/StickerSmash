import { Stack } from 'expo-router';
// import { LogBox } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// LogBox.ignoreAllLogs(true); // Ignore all log notifications

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* <Stack.Screen 
        name="index" 
        options={{ 
          title: 'Sticker Smash',   
          headerLeft: ()=> <></> }}
        />
      <Stack.Screen 
        name="about" 
        options={{ title: 'About' }} 
      /> */}
        {/* Keep not found in root layout so that tabs will not show on 404 page */}
        <Stack.Screen
          name="+not-found"
        // options={{ title: 'Not Found' }} 
        />
      </Stack>
    </>
  );
}
