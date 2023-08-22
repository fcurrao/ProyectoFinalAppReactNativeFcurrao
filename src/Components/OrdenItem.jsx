import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons"; 
import { colors } from "../Global/Colors";
import { useSelector } from "react-redux";
import React, { useState } from "react";



const OrderItem = ({ order }) => {

    // alert("TENGO Q TRAERME DE ORDERJ.JS LAS ORDENES Y REMPLAZARLA POR CART DATA")
    const {items : CartData} = useSelector(state => state.orderReducer.value)
    console.warn(" xdxdx ",useSelector(state => state.orderReducer.value.items));
    const nOrder = Math.floor(Math.random() * 1000000)
    let  currentOrders = []
    if ( useSelector(state => state.orderReducer.value.items.length !== 0) ){
     currentOrders = CartData[0].CartData

    } else {currentOrders = []} 
    console.warn("34",currentOrders);
    // const total = 10;
    const total = currentOrders.reduce(
        (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
        0
    );

    
    // const [total2,setTotal2] = useState()
    //   CartData.map(x => 
    //     setTotal2(x.quantity * x.price)
    // );
    // console.warn("xd", total2);


    return (
        <View style={styles.card} onPress={() => {}}>
            
             
            
               {order.map(eachOrder=> 
            //    {let i++ }
               <View style={styles.textContainer}>


                <Text style={styles.text2}>Order number {nOrder}</Text>
             
                {/* {eachOrder.map(eO=>  
                <> */}
<Text style={styles.text2}>Productos  </Text>
                {eachOrder.CartData.map(eO=>  
                <>
                {console.warn("PROBANDO", eO)} 
                <Text> {eO.title} </Text> 
                </>
                  )}
                {console.warn("PROBANDO", eachOrder)} 
                {console.warn("PROBANDO 1 ", eachOrder.CartData)} 
                {console.warn("PROBANDO 2 ", eachOrder.CartData[0])} 
              
                  
                
                <Text style={styles.text}>
                    {new Date(eachOrder.CartData.createdAt).toLocaleString()}
                </Text>  
                {/* </> */}
                

                <Text style={styles.text2}>${total}</Text>
            </View>
            )}
            <Feather name="search" size={30} color="black" />
        </View>
    );
};

export default OrderItem;

const styles = StyleSheet.create({
    card: {
        height: 250,
        backgroundColor: colors.peach,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {
        width: "70%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    text: {
        fontFamily: "Josefin",
        fontSize: 17,
        color: "black",
    },
    text2: {
        fontFamily: "Josefin",
        fontSize: 19,
        color: "gray",
    },
});

// import { StyleSheet, Text, View } from "react-native";
// import { Feather } from "@expo/vector-icons";
// import React from "react";
// import { colors } from "../Global/Colors";

// const OrderItem = ({ order }) => {
//     const total = order.items.reduce(
//         (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
//         0
//     );

//     return (
//         <View style={styles.card} onPress={() => {}}>
//             <View style={styles.textContainer}>
//                 <Text style={styles.text}>
//                     {new Date(order.createdAt).toLocaleString()}
//                 </Text>
//                 <Text style={styles.text2}>${total}</Text>
//             </View>
//             <Feather name="search" size={30} color="black" />
//         </View>
//     );
// };

// export default OrderItem;

// const styles = StyleSheet.create({
//     card: {
//         height: 100,
//         backgroundColor: colors.peach,
//         padding: 10,
//         margin: 10,
//         borderWidth: 2,
//         borderRadius: 10,
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//     },
//     textContainer: {
//         width: "70%",
//         flexDirection: "column",
//         justifyContent: "flex-start",
//         alignItems: "flex-start",
//     },
//     text: {
//         fontFamily: "Josefin",
//         fontSize: 17,
//         color: "black",
//     },
//     text2: {
//         fontFamily: "Josefin",
//         fontSize: 19,
//         color: "gray",
//     },
// });