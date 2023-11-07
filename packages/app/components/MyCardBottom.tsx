import { View, Text } from 'react-native'
import React from 'react'
import { Card, YStack, H4, Paragraph } from 'tamagui'

const MyCardBottom = () => {
  return (
    <Card
      style={{
        maxWidth: 700,
        width: '100%',
        borderRadius: 0,
      }}
      padding={24}
      bordered
      borderWidth={2}
    >
      <YStack>
        <H4 color="#EB7002">Proficiat! De opdrachtgever heeft jou uitgekozen voor deze job!</H4>
        <Paragraph>
          We nemen snel contact met je op om de administratieve zaken in orde te maken.
        </Paragraph>
      </YStack>
    </Card>
  )
}

export default MyCardBottom
