import { Button, Card, CardProps, H4, Image, Paragraph, XStack, YStack } from 'tamagui'

import { View, Text, FlatList } from 'react-native'
import React from 'react'


type ItemProps = {
  id: string
  image: any
  title: string
  companyName: string
  Location: string
  distance: string
}


export function CardJobInfo() {
  const item: ItemProps = {
    id: '1',
    image: 'https://placekitten.com/200/300',
    title: 'Logistiek medewerker Postponement',
    companyName: 'KLM',
    Location: 'Maastricht',
    distance: '3,7 km',
  }
  return (
    <XStack $sm={{ flexDirection: 'column' }} width={'100%'} paddingHorizontal={20} space>
      <DemoCard height={222} {...item} />
    </XStack>
  )
}

export function DemoCard(props: CardProps & ItemProps) {
  const { id, image, title, companyName, Location, distance } = props
  return (
    <Card elevate size="$4" bordered {...props}>
      <View style={{ flex: 1, padding: 10 }}>
        <YStack>
          {/* <Image source={image} /> */}
          <H4 style={{ fontSize: 26 }}>{title}</H4>
          <XStack>
            <Paragraph paddingHorizontal={2}>{companyName}</Paragraph>
            <Paragraph paddingHorizontal={2}>{Location}</Paragraph>
            <Paragraph paddingHorizontal={2}>{distance}</Paragraph>
          </XStack>
        </YStack>
      </View>
    </Card>
  )
}
