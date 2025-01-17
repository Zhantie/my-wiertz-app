import { Button, XStack, YStack, ScrollView, Text } from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { CardJobInfo } from 'app/components/cardJobInfo'
import React, { useState } from 'react'
import { useLink } from 'solito/link'


export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })

  return (
    <YStack f={1} justifyContent="center" alignItems="center" marginTop={30}>
      <CardJobInfo/>
    </YStack>
  )
}
