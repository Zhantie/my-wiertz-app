import { CardJobInfo } from 'app/components/cardJobInfo'
import { Stack } from 'expo-router'
import { Text, YStack, Button } from 'tamagui'

import MySafeAreaView from '../shared/Wrap-components/MySafeAreaView'

export default function Screen() {
  return (
    <MySafeAreaView>
      <Stack.Screen
        options={{
          title: 'Home',
          headerShown: false,
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
    </MySafeAreaView>
  )
}
