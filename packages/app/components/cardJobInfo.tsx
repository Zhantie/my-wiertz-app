import { Button, Card, CardProps, H4, Image, Paragraph, XStack, YStack, Text } from 'tamagui'
import { Dimensions } from 'react-native'
import KLMImage from './images/KLM.png'
import { Platform } from 'react-native'

import { FlatList, View } from 'react-native'
import React,  { useState }  from 'react'
import { Cloud, MapPin, MapPinOff, Moon, Heart, Sun } from '@tamagui/lucide-icons'
import { ListItem, YGroup } from '@my/ui/src'

type ItemProps = {
  id: string
  title: string
  companyName: string
  Location: string
  distance: string
}

export function CardJobInfo() {
  const item: ItemProps = {
    id: '1',
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
  const { id, title, companyName, Location, distance } = props
  const [isLiked, setIsLiked] = useState(false);

  const handlePress = () => {
    setIsLiked(!isLiked);
  };

  return (
    <Card borderRadius={0} padding={10} bordered position="relative">
      {Platform.OS === 'android' || Platform.OS === 'ios' ? (
        <Button
          borderRadius={0}
          backgroundColor=""	
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
          }}
          icon={<Heart size={22} color="#EB7002" />}
          
        ></Button>
      ) : null}
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
