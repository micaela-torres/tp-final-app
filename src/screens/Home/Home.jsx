import { FlatList, SafeAreaView, StatusBar, View, Image } from 'react-native'

import { CategoryItem } from './components'
import { Header } from '../../components'
import React from 'react'
import dataCategories from '../../data/dataCategories'
import { useGetCategoriesQuery } from '../../services/shopApi'
import styles from './Home.style'

const Home = ({ navigation }) => {
  const { data, isLoading } = useGetCategoriesQuery()
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar animated={true} barStyle={'dark-content'} />
        <Header title={'Categories'} />
        <View style={styles.listContainer}>
          {!isLoading && (
            <FlatList
              data={data}
              keyExtractor={category => category.title}
              renderItem={({ item }) => (
                <CategoryItem category={item.title} navigation={navigation} />
              )}
          />
        )}
      </View>
      </SafeAreaView>
    </>
  )
}

export default Home
