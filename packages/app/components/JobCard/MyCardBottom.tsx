import { View, Text } from 'react-native'
import React from 'react'
import { Card, YStack, H4, Paragraph } from 'tamagui'

const MyCardBottom = () => {
  return (
    <Card
      width={'100%'}
      borderRadius={0}
      padding={24}
      bordered
      borderWidth={2}
      style={{ borderTopWidth: 0 }}
    >
      <YStack>
        <H4 color="#EB7002">Gefeliciteerd, deze job is van jou! </H4>
        <Paragraph>We nemen snel contact met je op voor het tekenen van je contract.</Paragraph>
      </YStack>
    </Card>
  )
}

export default MyCardBottom
