import { DemoCard } from 'app/components/JobCard/MyCard'
import { Stack } from 'expo-router'
import {
  Text,
  YStack,
  Tabs,
  H5,
  Separator,
  TabsContentProps,
  Spinner,
  XStack,
  Button,
} from 'tamagui'

import MySafeAreaView from '../shared/Wrap-components/MySafeAreaView'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

export default function Screen() {
  return (
    <MySafeAreaView>
      <Stack.Screen
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />

      <YStack padding={10} justifyContent={'center'} alignItems="center">
        <Text fontWeight={'bold'} fontSize={30}>
          Vacatures
        </Text>
      </YStack>
      <HorizontalTabs />
    </MySafeAreaView>
  )
}

const HorizontalTabs = () => {
  const [selectedTab, setSelectedTab] = useState('tab1')
  const [isLoading, setIsLoading] = useState(false)
  const MemoizedCardJobInfo = React.memo(DemoCard)

  useEffect(() => {
    if (selectedTab === 'tab1') {
      setIsLoading(true)
      // Simuleer een netwerkverzoek
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    }
  }, [selectedTab])

  return (
    <Tabs
      key={selectedTab}
      value={selectedTab}
      onValueChange={(newValue) => setSelectedTab(newValue)}
      defaultValue="tab1"
      orientation="horizontal"
      flexDirection="column"
    >
      <Tabs.List
        separator={<Separator vertical />}
        disablePassBorderRadius="bottom"
        justifyContent="center"
        alignItems="center"
        marginHorizontal={20}
        bordered
        borderWidth={2}
      >
        <XStack padding={4}>
          <TabsTabs flex={1} value="tab1">
            <Text fontSize={13}>Alle vacatures</Text>
          </TabsTabs>
          <TabsTabs flex={1} value="tab2">
            <Text fontSize={13}>Favorieten</Text>
          </TabsTabs>
          <TabsTabs flex={1} value="tab3">
            <Text fontSize={13}>Mijn sollicitaties</Text>
          </TabsTabs>
        </XStack>
      </Tabs.List>

      {selectedTab === 'tab1' && ( // checkt of het tab1 is zo ja dan laat het de onderstaande card zien, zo niet niet
        <TabsContent justifyContent="center" alignItems="center" marginTop={20} value="tab1">
          <DemoCard isChosenCard={true} isJobCardInfo={false} id={''} title={''} companyName={''} Location={''} distance={''} categories={[]} />
        </TabsContent>
      )}

      {selectedTab === 'tab2' && (
        <TabsContent justifyContent="center" alignItems="center" value="tab2">
          <H5>Favorieten</H5>
        </TabsContent>
      )}

      {selectedTab === 'tab3' && (
        <TabsContent justifyContent="center" alignItems="center" value="tab3">
          <H5>Mijn sollicitaties</H5>
        </TabsContent>
      )}
    </Tabs>
  )
}

const TabsContent = (props: TabsContentProps) => {
  return <Tabs.Content {...props}>{props.children}</Tabs.Content>
}

interface TabsTabsProps {
  flex?: number
  value: string
  children?: React.ReactNode
}

const TabsTabs = (props: TabsTabsProps) => {
  return (
    <Tabs.Tab borderRadius={5} {...props}>
      {props.children}
    </Tabs.Tab>
  )
}
