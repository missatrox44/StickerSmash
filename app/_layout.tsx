import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          title: 'Sticker Smash',   
          headerLeft: ()=> <></> }}
        />
      <Stack.Screen 
        name="about" 
        options={{ title: 'About' }} 
      />
      <Stack.Screen 
        name="+not-found" 
        options={{ title: 'Not Found' }} 
      />
    </Stack>
  );
}
