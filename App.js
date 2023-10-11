import MainNavigator from './src/navigation/MainNavigator'
import { PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import fonts from './src/global/fonts'
import { store } from './src/store'
import { useFonts } from 'expo-font'
import React from 'react'

export default function App() {
  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return null
  }

  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </PaperProvider>
      
    </Provider>
  )
}

