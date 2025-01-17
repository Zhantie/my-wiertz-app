import { Button, Card, CardProps, H4, Image, Paragraph, XStack, YStack, H2, Stack } from 'tamagui'
import { ScrollView, View } from 'react-native'
import { Platform } from 'react-native'

import { FlatList } from 'react-native'
import React from 'react'
import { Heart, Euro, Clock, GraduationCap } from '@tamagui/lucide-icons'
import MyCardBottom from '../JobCard/MyCardBottom'
import MyLikeButton from './MyLikeButton'

const DATA = [
  {
    id: '1',
    title: 'Logistiek medewerker Postponement',
    imageLogo: 'https://fakeimg.pl/100x100/cccccc/909090?font=bebas',
    companyName: 'KLM',
    Location: 'Maastricht',
    distance: '3,7 km',
    categories: [
      {
        name: '2.654,- per maand',
        icon: <Euro size={20} />,
      },
      {
        name: '38 uur',
        icon: <Clock size={20} />,
      },
      {
        name: 'MBO',
        icon: <GraduationCap size={20} />,
      },
      {
        name: '38 uur',
        icon: <Clock size={20} />,
      },
      {
        name: 'MBO',
        icon: <GraduationCap size={20} />,
      },
      {
        name: '38 uur',
        icon: <Clock size={20} />,
      },
      {
        name: 'MBO',
        icon: <GraduationCap size={20} />,
      },
    ],
    selected: true,
  },
  {
    id: '2',
    title: 'Maaltijdbezorger fiets',
    imageLogo: 'https://fakeimg.pl/100x100/cccccc/909090?font=bebas',
    companyName: 'Flink',
    Location: 'Maastricht',
    distance: '5.2 km',
    categories: [
      {
        name: '2.400,- per maand',
        icon: <Euro size={20} />,
      },
      {
        name: '36 uur',
        icon: <Clock size={20} />,
      },
    ],
    selected: true,
  },
  {
    id: '3',
    title: 'Customer Service Manager',
    imageLogo: 'https://fakeimg.pl/100x100/cccccc/909090?font=bebas',
    companyName: 'HelloFresh',
    Location: 'Maastricht',
    distance: '2.1 km',
    categories: [
      {
        name: '2.730,- per maand',
        icon: <Euro size={20} />,
      },
      {
        name: '38 uur',
        icon: <Clock size={20} />,
      },
      {
        name: 'HBO',
        icon: <GraduationCap size={20} />,
      },
    ],
  },
  {
    id: '4',
    title: 'Customer Service Manager',
    imageLogo: 'https://fakeimg.pl/100x100/cccccc/909090?font=bebas',
    companyName: 'HelloFresh',
    Location: 'Maastricht',
    distance: '2.1 km',
    categories: [
      {
        name: '2.730,- per maand',
        icon: <Euro size={20} />,
      },
      {
        name: '38 uur',
        icon: <Clock size={20} />,
      },
      {
        name: 'HBO',
        icon: <GraduationCap size={20} />,
      },
    ],
    selected: false,
  },
  {
    id: '5',
    title: 'Customer Service Manager',
    imageLogo: 'https://fakeimg.pl/100x100/cccccc/909090?font=bebas',
    companyName: 'HelloFresh',
    Location: 'Maastricht',
    distance: '2.1 km',
    categories: [
      {
        name: '2.730,- per maand',
        icon: <Euro size={20} />,
      },
      {
        name: '38 uur',
        icon: <Clock size={20} />,
      },
      {
        name: 'HBO',
        icon: <GraduationCap size={20} />,
      },
    ],
    selected: false,
  },
]

type ItemProps = {
  id?: string
  title?: string
  companyName?: string
  Location?: string
  distance?: string
  categories?: {
    name: string
    icon: any
  }[]
  selected?: boolean
}

const isWeb = Platform.OS === 'web' || Platform.OS === 'windows' || Platform.OS === 'macos'
const isNative = Platform.OS === 'ios' || Platform.OS === 'android'

// type demoCardProps is een eigen props kan combineren met de CardProps en itemProps van Tamagui
type DemoCardProps = {
  isChosenCard?: boolean
  isJobCardInfo?: boolean
  isLikeButton?: boolean
} & CardProps

// De hele Card component die wordt gebruikt in de Flatlist
export function DemoCard(props: DemoCardProps & ItemProps) {
  return (
    <Stack justifyContent="center" alignItems="center">
      <FlatList
        style={{ paddingHorizontal: 24 }}
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Stack marginVertical={24}>
            <Card
              borderRadius={0}
              maxWidth={700}
              padding={24}
              bordered
              borderWidth={2}
            >
              <YStack>
                <XStack justifyContent='space-between' paddingVertical={5}>
                  <Image
                    source={{ uri: item.imageLogo }}
                    style={{ width: 100, height: 100 }}
                    resizeMode="contain"
                  />
                  {props.isLikeButton ? <MyLikeButton /> : null}
                </XStack>

                <H4 style={{ fontSize: 26, paddingVertical: 5 }}>{item.title}</H4>
                
                <XStack paddingVertical={5}>
                  <Paragraph paddingHorizontal={2}>{item.companyName}</Paragraph>
                  <Paragraph paddingHorizontal={2}>{item.Location}</Paragraph>
                  <Paragraph paddingHorizontal={2}>{item.distance}</Paragraph>
                </XStack>
                <XStack paddingVertical={5}>
                  <ScrollView showsHorizontalScrollIndicator={false} horizontal={isNative}> 
                    <XStack
                      style={{
                        width: '100%',
                        flexWrap: 'wrap', 
                      }}
                      gap={10}
                    >
                      {item.categories.map((category, index) => (
                        <XStack key={index}>
                          <Button
                            borderRadius={0}
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent: 'center',
                              backgroundColor: '#FBE7D7',
                              padding: 7,
                            }}
                          >
                            {React.cloneElement(category.icon, { color: '#EB7002' })}

                            <Paragraph
                              alignItems={'center'}
                              justifyContent={'center'}
                              paddingHorizontal={6}
                              color="#EB7002"
                            >
                              {category.name}
                            </Paragraph>
                          </Button>
                        </XStack>
                      ))}
                    </XStack>
                  </ScrollView>
                </XStack>
              </YStack>
            </Card>
            {item.selected && props.isChosenCard ? <MyCardBottom /> : null}
          </Stack>
        )}
      />
    </Stack>
  )
}
