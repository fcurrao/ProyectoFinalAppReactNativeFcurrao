import { FlatList, StyleSheet, Text, Platform, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'
// import categories from '../Data/categories.json'
import { useGetCategoriesQuery } from '../Services/shopServices'
import CategoryItem from '../Components/CategoryItem'
import Counter from '../Components/Counter'

const Home = ({
    // setCategorySelected
    navigation, route
}) => {
  
  const {width, height} = useWindowDimensions()
  console.log(  "tu dimencion es :  altura: ", height, "Ancho: " , width)
  console.log ( "tu plataforma es:",  Platform.OS )
  const {data: categories, isLoading, isError} = useGetCategoriesQuery()

  console.log("cat",categories);
  console.log("loading",isLoading);
  console.log("err",isError);
  
  return (
    <View style={styles.container}>
        <Counter/>
        <FlatList
           data = {categories}
           keyExtractor={category => category}
           renderItem={({item}) => <CategoryItem item={item} navigation = {navigation}/>}
           showsVerticalScrollIndicator={false}
           showsHorizontalScrollIndicator={false}
           contentContainerStyle={styles.wrapper}
           horizontal={true}
           style={styles.flatlist}
        />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    wrapper: {
        gap: 20,
      },
      container: {
          backgroundColor: colors.lightPink,
          alignItems: 'center',
      },
      flatlist: {
        width: '80%'
      }
})