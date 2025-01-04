import { Stack } from "expo-router";

export default function ScreensLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="create-model"
        options={{
          title: 'Create Model',
          headerShown: true,
          headerBackTitle: 'Home',
        }}
      />
    </Stack>
  );
}
