import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartItem from '../Components/CartItem';
import { useSelector } from 'react-redux';
import { usePostCartMutation } from '../Services/shopServices';

const Cart = () => {
    const {items: CartData, total, updatedAt, user} = useSelector(state => state.cartReducer.value)
    const [triggerPostCart, result] = usePostCartMutation()

    const onConfirm = () => {
        triggerPostCart({items: CartData, total, user, updatedAt})
    }

    console.log(result);

    return (
    <View style={styles.container}>
        <FlatList
            data={CartData}
            keyExtractor={cartItem => cartItem.id}
            renderItem={({item})=> {
                return (
                    <CartItem
                        cartItem={item}
                    />
                )
            }}
        />
        <View style={styles.totalContainer}>
            <Pressable
                onPress = {onConfirm}
            >
                <Text>
                    Confirm
                </Text>
            </Pressable>
            <Text>Total: ${total}</Text>
        </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flex: 1,
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: 20,
    }
})


// import { Pressable, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// // import CartData from '../Data/cart.json'
// import CartItem from '../Components/CartItem'
// import { FlatList } from 'react-native-web'
// import { useSelector } from 'react-redux'
// import { usePostCartMutation } from '../Services/shopServices'


// const Cart = () => { 
//     const {items: CartData, total, updatedAt, user} = useSelector(state => state.cartReducer.value)
//     const [triggerPostCart, result] = usePostCartMutation()

      
//     const confirmCart = () => {
//         // chekeo de stock
//         triggerPostCart({CartData, total ,user, updatedAt})
//     }
//     // const total = CartData.reduce((acc, item) => 
//     // acc += item.price * item.quantity, 0)


//     console.log("result",result);

//   return (
//     <View style={styles.container}>

//     <FlatList
//     data={CartData}
//     keyExtractor={cartItem => cartItem.id}
//     renderItem={ ({item})=>{
//         return(
//             <CartItem cartItem={item}/>
//         )
//     } }
//     />    

//     <View style={styles.totalContainer}>
//     <Pressable
//     onPress={confirmCart} >
//         <Text  style={styles.confirm}>
//           Confirm
//         </Text>
//     </Pressable>
//         <Text style={styles.total}>
//             Total : {total}
//         </Text>

//     </View>
//     </View>
//   )
// }

// export default Cart

// const styles = StyleSheet.create({
//     confirm:{ 
//             backgroundColor:"blue",
//             padding: "15px",
//             flexDirection: 'row',
//             marginBottom: 100,
//                 justifyContent:'center',
//                 alignItems: 'center',
//     },
//         totalContainer:{
//             flexDirection: 'row',
//             marginBottom: 20,
//             justifyContent:'center',
//             alignItems: 'center',
//         }, 
//         container: {
//             justifyContent: 'space-between',
//             flex: 1,
//         },
//         total: {
//             marginTop: "-100px",
//         padding: "15px",
//         fontSize: 24,
//     }
// })