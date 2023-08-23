import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../Global/Colors";
import { useSelector } from "react-redux";
import React, { useState } from "react";



const OrdenItemDetail = ({title, price,quantity, id, subTotal}) => {
 




    return (
        <> 
            <View  style={styles.totalContainer} onPress={() => { }}>
                <View >
                    <Text style={styles.text1}> {quantity} units of {title} (${price}) | ${subTotal}  </Text> 
                </View>
            </View>
         
        </>
    );
};



export default OrdenItemDetail;

const styles = StyleSheet.create({
    totalContainer: {
    height: 100, 
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    },
    text1: {
        fontFamily: "Josefin",
        fontSize: 22,
        color: "gray"
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