import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OrderData from '../Data/orders.json'
import OrderItem from '../Components/OrdenItem' 

import { useSelector } from "react-redux";

const OrderScreen = () => {
  const {items : CartData,  updatedAt : updatedAt, numberOrder:numberOrder} = useSelector(state => state.orderReducer.value)
  const infoData = CartData
console.warn("cardata desde ordenscreen", infoData);
console.warn("cardata desde ordenscreen", infoData.CartData);
console.warn("ssssssssssss", CartData);
let dataInfo = CartData

let totalorder = 0 
for (let j=0; j<CartData.length ; j++){
for (let i=0; i<CartData[j].CartData.length ; i++){
totalorder += CartData[j].CartData[i].price * CartData[j].CartData[i].quantity;
}}
console.warn("AVERRRRRRRRRRR,",totalorder);
  return (
    <View> 
       
        <OrderItem  order={CartData} totalorder={totalorder} updatedAt={updatedAt} numberOrder={numberOrder}/>  
        
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