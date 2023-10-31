import { Button, Card, CardProps, H4, Image, Paragraph, XStack, YStack, Text } from 'tamagui'
import { Dimensions } from 'react-native'
import KLMImage from './images/KLM.png'

import { FlatList, View } from 'react-native'
import React from 'react'
import { Cloud, MapPin, MapPinOff, Moon, Star, Sun } from '@tamagui/lucide-icons'
import { ListItem, YGroup } from '@my/ui/src'

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
    image: './images/KLM.png',
    title: 'Logistiek medewerker Postponement',
    companyName: 'KLM',
    Location: 'Maastricht',
    distance: '3,7 km',
  }
  return (
    <XStack width={'100%'} paddingHorizontal={20} space>
      <DemoCard height={222} {...item} />
    </XStack>
  )
}

export function DemoCard(props: CardProps & ItemProps) {
  const { id, image, title, companyName, Location, distance } = props

  console.log(image);
  return (
    <Card borderRadius={0} padding={10} bordered backgroundColor={'grey'}>
      <YStack>
        <XStack>
          <Image source={KLMImage} />
        </XStack>
        <H4 style={{ fontSize: 26, paddingVertical: 5 }}>{title}</H4>
        <XStack paddingVertical={5}>
          <Paragraph paddingHorizontal={2}>{companyName}</Paragraph>
          <Paragraph paddingHorizontal={2}>{Location}</Paragraph>
          <Paragraph paddingHorizontal={2}>{distance}</Paragraph>
        </XStack>
        <XStack paddingVertical={5}>
          <ListItemDemo />
        </XStack>
      </YStack>
    </Card>
  )
}

function ListItemDemo() {
  const CATEGORIES = [
    { name: '2.654,- per maand', icon: 'clothing-icon' },
    { name: '38 uur', icon: 'shoes-icon' },
    { name: 'MBO', icon: 'accessories-icon' },
  ]

  const RenderItem = ({ item }) => (
    <View style={{ margin: 5 }}>
      <Button
        borderRadius={0}
        style={{ backgroundColor: '#FBE7D7', color: '#EB7002' }}
        icon={MapPin}
      >
        {item.name}
      </Button>
    </View>
  )

  return (
    <XStack>
      <View style={{ width: '100%', flexWrap: 'wrap' }}>
        <FlatList
          data={CATEGORIES}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={RenderItem}
          style={{ width: '100%' }}
        />
      </View>
    </XStack>
  )
}
