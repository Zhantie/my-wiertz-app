import { Button, Card, CardProps, H4, Image, Paragraph, XStack, YStack } from 'tamagui'
import { ScrollView } from 'react-native'

import { Platform } from 'react-native'

import { FlatList } from 'react-native'
import React from 'react'
import { Heart, Euro, Clock, GraduationCap } from '@tamagui/lucide-icons'
import { Stack } from '@my/ui/src'

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
    <XStack paddingHorizontal={23}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <DemoCard {...item} />}
        keyExtractor={(item) => item.id}
        scrollIndicatorInsets={{ right: 0 }} // Change position of scroll indicator 
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
                      padding: 7,
                    }}
                  >
                    {React.cloneElement(category.icon, { color: '#EB7002' })}

                    <Paragraph paddingVertical={7} paddingHorizontal={6} color="#EB7002">
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
