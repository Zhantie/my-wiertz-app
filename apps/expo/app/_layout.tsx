import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Provider } from 'app/provider'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { useColorScheme, StyleSheet } from 'react-native'
import MySafeAreaView from '../shared/Wrap-components/MySafeAreaView'

export default function HomeLayout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })
  const scheme = useColorScheme()

  if (!loaded) {
    return null
  }
  return (
    <Provider>
      <MySafeAreaView edges={['top']} style={styles.fullScreen}>
        <ThemeProvider value={scheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack />
        </ThemeProvider>
      </MySafeAreaView>
    </Provider>
  )
}

const styles = StyleSheet.create({
  fullScreen: {
    height: '100%',
  },
})
