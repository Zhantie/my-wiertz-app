import { Button, Card, CardProps, H4, Image, Paragraph, XStack, YStack, Text } from 'tamagui'
import { Dimensions, ScrollView } from 'react-native'
import KLMImage from './images/KLM.png'
import { Platform } from 'react-native'

import { FlatList, View } from 'react-native'
import React, { useState } from 'react'
import { Cloud, MapPin, MapPinOff, Heart, Moon, Sun, X } from '@tamagui/lucide-icons'
import { ListItem, Stack, YGroup } from '@my/ui/src'

const DATA = [
  {
    id: '1',
    title: 'Logistiek medewerker Postponement',
    companyName: 'KLM',
    Location: 'Maastricht',
    distance: '3,7 km',
    categories: [
      {
        name: '2.654,- per maand',
        icon: <Heart size={20} />,
      },
      {
        name: '38 uur',
        icon: <Heart size={20} />,
      },
      {
        name: 'MBO',
        icon: <Heart size={20} />,
      },
      {
        name: 'MBO',
        icon: <Heart size={20} />,
      },
    ],
  },
  {
    id: '2',
    title: 'Logistiek medewerker Postponement',
    companyName: 'KLM',
    Location: 'Maastricht',
    distance: '3,7 km',
    categories: [
      {
        name: '2.654,- per maand',
        icon: <Heart size={20} />,
      },
      {
        name: '38 uur',
        icon: <Heart size={20} />,
      },
      {
        name: 'MBO',
        icon: <Heart size={20} />,
      },
    ],
  },
  {
    id: '3',
    title: 'Logistiek medewerker Postponement',
    companyName: 'KLM',
    Location: 'Maastricht',
    distance: '3,7 km',
    categories: [
      {
        name: '2.654,- per maand',
        icon: <Heart size={20} />,
      },
      {
        name: '38 uur',
        icon: <Heart size={20} />,
      },
      {
        name: 'MBO',
        icon: <Heart size={20} />,
      },
    ],
  },
  {
    id: '4',
    title: 'Logistiek medewerker Postponement',
    companyName: 'KLM',
    Location: 'Maastricht',
    distance: '3,7 km',
    categories: [
      {
        name: '2.654,- per maand',
        icon: <Heart size={20} />,
      },
      {
        name: '38 uur',
        icon: <Heart size={20} />,
      },
      {
        name: 'MBO',
        icon: <Heart size={20} />,
      },
    ],
  },
  {
    id: '5',
    title: 'Logistiek medewerker Postponement',
    companyName: 'KLM',
    Location: 'Maastricht',
    distance: '3,7 km',
    categories: [
      {
        name: '2.654,- per maand',
        icon: <Heart size={16} />,
      },
      {
        name: '38 uur',
        icon: <Heart size={16} />,
      },
      {
        name: 'MBO',
        icon: <Heart size={16} />,
      },
      {
        name: 'MBO',
        icon: <Heart size={16} />,
      },
    ],
  },
  {
    id: '6',
    title: 'Logistiek medewerker Postponement',
    companyName: 'KLM',
    Location: 'Maastricht',
    distance: '3,7 km',
    categories: [
      {
        name: '2.654,- per maand',
        icon: <Heart size={20} />,
      },
      {
        name: '38 uur',
        icon: <Heart size={20} />,
      },
      {
        name: 'MBO',
        icon: <Heart size={20} />,
      },
    ],
  },
]

type ItemProps = {
  id: string
  title: string
  companyName: string
  Location: string
  distance: string
  categories: {
    name: string
    icon: any
  }[]
}

export function CardJobInfo() {
  return (
    <XStack padding={23}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <DemoCard {...item} />}
        keyExtractor={(item) => item.id}
      />
    </XStack>
  )
}

export function DemoCard(props: CardProps & ItemProps) {
  const { id, title, companyName, Location, distance, categories } = props

  return (
    <Card
      borderRadius={5}
      padding={24}
      bordered
      borderWidth={2}
      position="relative"
      marginVertical={20}
    >
      {Platform.OS === 'android' || Platform.OS === 'ios' ? (
        <Button
          borderRadius={0}
          backgroundColor=""
          width={50}
          height={50}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
          }}
          icon={<Heart size={25} color="#EB7002" />}
        ></Button>
      ) : null}
      <YStack>
        <XStack paddingVertical={5}>
          <Image
            source={{ uri: 'https://fakeimg.pl/100x100/cccccc/909090?font=bebas' }}
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
          />
        </XStack>
        <H4 style={{ fontSize: 26, paddingVertical: 5 }}>{title}</H4>
        <XStack paddingVertical={5}>
          <Paragraph paddingHorizontal={2}>{companyName}</Paragraph>
          <Paragraph paddingHorizontal={2}>{Location}</Paragraph>
          <Paragraph paddingHorizontal={2}>{distance}</Paragraph>
        </XStack>
        <XStack paddingVertical={5}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <XStack style={{ width: '100%', flexWrap: 'wrap' }} gap={10}>
              {categories.map((category, index) => (
                <XStack key={index}>
                  <Stack
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#FBE7D7',
                      padding: 7, // padding van 7 aan alle kanten
                    }}
                  >
                    {category.icon}

                    <Paragraph paddingVertical={7} paddingHorizontal={6}>
                      {category.name}
                    </Paragraph>
                  </Stack>
                </XStack>
              ))}
            </XStack>
          </ScrollView>
        </XStack>
      </YStack>
    </Card>
  )
}
