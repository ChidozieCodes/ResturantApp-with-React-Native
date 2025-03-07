import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      
      <Stack.Screen name="index" options={{headerShown:false}} />
      <Stack.Screen name="home" options={{headerShown:false}} />
      <Stack.Screen name="login" options={{headerShown:false}} />
      <Stack.Screen name="register" options={{headerShown:false}} />
      <Stack.Screen name="showCounter" options={{headerShown:false}} />
      <Stack.Screen name="(tabs)" options={{headerShown:false}} />
      <Stack.Screen name="plan" options={{headerShown:false}} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}

