import { Button, XStack, YStack, ScrollView } from '@my/ui'
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
      {/* <XStack>
        <Button {...linkProps}>Link to user</Button>
      </XStack> */}
      <ScrollView space>
        <CardJobInfo />
      </ScrollView>
    </YStack>
  )
}
