import { Button, Card, CardProps, H4, Image, Paragraph, XStack, YStack, H2, Stack } from 'tamagui'
import { ScrollView, View } from 'react-native'
import { useColorScheme } from 'react-native'
import { Platform } from 'react-native'

import { FlatList } from 'react-native'
import React from 'react'
import { Heart, Euro, Clock, GraduationCap } from '@tamagui/lucide-icons'
import MyCardBottom from './MyCardBottom'

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

const isWeb = Platform.OS === 'web' || Platform.OS === 'windows' || Platform.OS === 'macos'
const isNative = Platform.OS === 'ios' || Platform.OS === 'android'

// type demoCardProps is een eigen props kan combineren met de CardProps en itemProps van Tamagui
type DemoCardProps = { isFirstItem?: boolean; isLastItem?: boolean } & ItemProps & CardProps
// De hele Card component die wordt gebruikt in de Flatlist
export function DemoCard(props: DemoCardProps) {
  const { id, title, companyName, Location, distance, categories, isFirstItem, isLastItem } = props
  return (
    // Card component vanuit Tamagui
    <Stack marginHorizontal={20} marginVertical={20} justifyContent="center" alignItems="center">
      <Card
        style={{
          maxWidth: 700,
          width: '100%',
          borderRadius: isNative ? 5 : 0, // checkt of het Native app is zo ja dan 5, zo niet 0
        }}
        padding={24}
        bordered
        borderWidth={2}
      >
        {/* kijkt of het Native app is zo ja heb je een like functie, zo niet geen heart icon */}
        {isNative ? (
          <Button
            borderRadius={0}
            backgroundColor=""
            width={50}
            height={50}
            style={{
              zIndex: 1,
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
              source={{ uri: 'https://fakeimg.pl/100x100/cccccc/909090?text=Img&font=bebas' }}
              style={{ width: 100, height: 100 }}
              resizeMode="contain"
            />
          </XStack>
          <H4 style={{ fontSize: 26, paddingVertical: 5 }}>{title}</H4>
          <XStack paddingVertical={5}>
            <Paragraph paddingHorizontal={2}>{companyName},</Paragraph>
            <Paragraph paddingHorizontal={2}>{Location},</Paragraph>
            <Paragraph paddingHorizontal={2}>{distance}</Paragraph>
          </XStack>
          <XStack paddingVertical={5}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={isNative}>
              <XStack
                style={{
                  width: '100%',
                  flexWrap: isWeb ? 'wrap' : 'nowrap', // checkt wanneer web is, dan wrap, anders niet
                }}
                gap={10}
              >
                {categories.map((category, index) => (
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

      {isWeb && <MyCardBottom />}
    </Stack>
  )
}