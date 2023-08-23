import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OrderData from '../Data/orders.json'
import OrderItem from '../Components/OrdenItem'  

import { useSelector } from "react-redux";

const OrderScreen = () => {
  const {items : CartData} = useSelector(state => state.orderReducer.value) 
 

  return (
    <View style={styles.container}> 
        {CartData == undefined ||    CartData == null ? (
            <>
            
            </>
           ) : (<>  
        <OrderItem  order={CartData}/>  
           </>)}
     
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({
  container:{
    flex: "1",
    transform:" translateZ(0px)",
    overflowY:"auto",
    flexShrink:1,
    flexGrow: 1,
    flexDirection: "column",
    overflowX: "hidden",
    // flex: 1 1 0%,
    // overflow-y: auto,
    //   transform: translateZ(0px),
    //  overflowY: auto, 
    //   //  overflow-y: auto,
    //   flex
    //    flex-shrink: 1,
    
    //    flex-grow: 1,
    
    //    flex-direction: column,
    
    //    overflow-x: hidden,
  }
})
 