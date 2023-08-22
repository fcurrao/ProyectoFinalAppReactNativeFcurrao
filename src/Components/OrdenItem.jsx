import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons"; 
import { colors } from "../Global/Colors";
import { useSelector } from "react-redux";
import React, { useState } from "react";



const OrderItem = ({ order,totalorder, numberOrder , updatedAt }) => {

    // alert("TENGO Q TRAERME DE ORDERJ.JS LAS ORDENES Y REMPLAZARLA POR CART DATA")  
    console.warn(" xdxdx ",useSelector(state => state.orderReducer.value.updatedAt));
    console.warn(" xxxxxxxxxxxxxxxxx ",order); 
    console.warn(" xxxxxxxxxxxxxxxxx ",totalorder); 
    console.warn(" xxxxxxxxxxxxxxxxx ",numberOrder); 
    console.warn(" xxxxxxxxxxxxxxxxx ",updatedAt); 
    let  currentOrders = []
    // if ( useSelector(state => state.orderReducer.value.items.length !== 0) ){
    //  currentOrders = CartData[0].CartData

    // } else {currentOrders = []} 
    // console.warn("34",currentOrders);
    // const total = 10;
    // const total2 = currentOrders.reduce(
    //     (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
    //     0
    // );
    numberOrder = []
    let numRandon = Math.floor(Math.random() * 1000000)
    let aaaaaaaaaa = numberOrder.push(numRandon)
    console.warn("PPPPPPPPPPPPP", aaaaaaaaaa);
    console.warn("PPPPPPPPPPPPP2    ", numberOrder);

    return (
<> 
<View > 
        {order.map(eachOrder=> <> 
<View  style={styles.card} onPress={() => {}}>
            <Text style={styles.text2}>  Fecha:{eachOrder.updatedAt}</Text>
            {eachOrder.CartData.map(eO=>  
                <>
                 <View style={styles.card2} onPress={() => {}}>
                  <Text style={styles.text1}> {eO.title} |  ${eO.price} - {eO.quantity}units = ${eO.price*eO.quantity} </Text> 
                
                 </View>
                </>
                )}
                {/* <Text style={styles.text2}> total de esta orden${total}</Text> */}
                <Text style={styles.text2}> total de esta orden${eachOrder.total}</Text>
                <Text style={styles.text3}> ----------------------------------</Text>
              </View>   
                </>
                )}
              </View>
              </>  
              );
            };
       


export default OrderItem;

const styles = StyleSheet.create({
    card: {
        height: "min-content",
        display: "flex",
        flexDirection: "column",
        backgroundColor: colors.peach,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10, 
        justifyContent: "space-between",
        alignItems: "center",  
    },
    card2: {
        height: "min-content",
        backgroundColor: "white",
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "column",
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
    text1: { 
    },
    text2: {
        fontFamily: "Josefin",
        fontSize: 19,
        color: "gray", 
    },
    text3: { 
        fontSize: 20,
        color: "black", 
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