import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        // headerStyle: {
        //   backgroundColor: '#f4511e',
        // },
        // headerTintColor: '#fff',
        // headerTitleStyle: {
        //   fontWeight: 'bold',
        // },

        headerShown: false
      }}>
      
      <Stack.Screen name="todo" options={{headerShown:false}} />
    </Stack>
  );
}

