import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="create-model"
        options={{
          title: 'Create Model',
          headerBackTitle: 'Home',
        }}
      />
    </Stack>
  );
}
