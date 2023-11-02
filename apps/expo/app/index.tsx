import { CardJobInfo } from 'app/components/cardJobInfo'
import { HomeScreen } from 'app/features/home/screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Home',
        }}
      />
      <CardJobInfo />
    </>
  )
}
