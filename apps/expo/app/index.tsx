import { DemoCard } from 'app/components/JobCard/MyCard'
import { Stack } from 'expo-router'
import {
  Text,
  YStack,
} from 'tamagui'

import MySafeAreaView from '../shared/Wrap-components/MySafeAreaView'
import React from 'react'


export default function Screen() {
  return (
    <MySafeAreaView>
      <Stack.Screen
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />

      <YStack padding={10} justifyContent={'center'} alignItems="center">
        <Text fontWeight={'bold'} fontSize={30}>
          Vacatures
        </Text>
      </YStack>
      <DemoCard isChosenCard={true} isJobCardInfo={true} isLikeButton={true}  />
    </MySafeAreaView>
  )
}



