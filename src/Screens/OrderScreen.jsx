import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OrderData from '../Data/orders.json'
import OrderItem from '../Components/OrdenItem'

import { useSelector } from "react-redux";

const OrderScreen = () => {
  const {items : CartData} = useSelector(state => state.orderReducer.value)
console.warn( CartData);
  return (
    <View> 
        <FlatList
            data={CartData}
            keyExtractor={orderItem => orderItem.id}
            renderItem={({
              item
            }) => {
                return (
                    <OrderItem 
                      order={item}
                    />
                )
            }}
        />
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({})

// import { FlatList, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import OrderData from '../Data/orders.json'
// import OrderItem from '../Components/OrdenItem'

// const OrderScreen = () => {
//   return (
//      <FlatList
//         data={OrderData}
//         keyExtractor={orderItem =>orderItem.id }
//         renderItem={({item}) => {
//             return(
//                 <OrderItem order={item}/>

//             )
//         }}
       
//         />

 
//   )
// }

// export default OrderScreen

// const styles = StyleSheet.create({})