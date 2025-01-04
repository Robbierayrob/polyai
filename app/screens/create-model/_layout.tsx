import { Stack } from 'expo-router';

export default function CreateModelLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          headerShown: false 
        }} 
      />
      <Stack.Screen 
        name="new" 
        options={{ 
          title: 'Create New Model',
          headerBackTitle: 'Back'
        }} 
      />
      <Stack.Screen 
        name="existing" 
        options={{ 
          title: 'Add Existing Model',
          headerBackTitle: 'Back'
        }} 
      />
    </Stack>
  );
}
