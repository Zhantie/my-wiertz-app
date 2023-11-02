import { CardJobInfo } from 'app/components/cardJobInfo'
import { HomeScreen } from 'app/features/home/screen'
import { Stack } from 'expo-router'
import { Text, YStack, Button } from 'tamagui'
import { StyleSheet, View } from 'react-native'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Home',
        }}
      />
      
      <YStack justifyContent={'center'} alignItems={'center'}>
        <Text padding={10} marginTop={100} fontWeight={'bold'} fontSize={30}>
          Vacatures
        </Text>
        <CardJobInfo />
        <Button>
          <Text>Button</Text>
        </Button>
      </YStack>
    </>
  )
}


