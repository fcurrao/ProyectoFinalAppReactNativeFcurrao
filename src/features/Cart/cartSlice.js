import { createSlice } from "@reduxjs/toolkit";  

export const cartSlice = createSlice({
    name: "Cart",
    initialState: {
        value: {
            user: "Hardcoder user",
            updatedAt: "",
            total: null,
            items: []
        }
    },
    reducers: {
        addCartItem: (state, action) => {
            //Logic to add item
            //1. Check productExists
            const productExists = state.value.items.some(item => item.id === action.payload.id)
 
            console.warn("=========" , state.value.items);
            console.warn("=========" , action.payload );
            //2. Distinct logic if exists product or not
            if (productExists) {
                state.value.items = state.value.items.map(item => {
                    if (item.id === action.payload.id) {
                        item.quantity += action.payload.quantity
                        return item
                    }
                    return item
                })
            } else state.value.items.push(action.payload)

            //3. Update total
            state.value.total = state.value.items.reduce(
                (acc, currentItem) => acc += currentItem.price * currentItem.quantity,
                0
            )

            //4. Update updatedAt
            state.value.updatedAt = new Date().toLocaleString()
        },
        removeCartItem: (state,action) => {
            state.value = {user: "Hardcoder user",
            updatedAt: "",
            total: null,
            items: []}
            //Logic to remove item
         
        },
        removeOneCartItem: (state,action) => {

            const productExists = state.value.items.some(item => item.id === action.payload.cartItem.id)
            const findex = state.value.items.findIndex(item => item.id === action.payload.cartItem.id)
            
            console.warn(" state.value.items",  state.value.items);
            console.warn("action.payload.cartItem", action.payload.cartItem);
            
            // action.payload.cartItem.slice(findex, 1)
            // state.value.items.slice(findex, 1)
            // console.warn("1",productExists);
            // console.warn("2", findex);
            // console.warn("3", state);
            // console.warn("3", action.payload.cartItem.id);
            // console.warn("3", state.value.items); 
            if (productExists &&  action.payload.cartItem.quantity>1) { 
                state.value.items[findex].quantity = state.value.items[findex].quantity -1 
                // state.value.items = state.value.items.map(item => {
                //     if (item.id === action.payload.id) {
                //         item.quantity = item.quantity - 1 
                //     } 
                // })
            } else {
                state.value.items.splice(findex,1)
            }
            // console.warn("action.payload.cartItem", action.payload.cartItem);
            // console.warn("3 2", state.value.items);


            //3. Update total
            // valorSubTotal =  state.value.total - action.payload.cartItem.price 
            // state.value.total = Math.abs(valorSubTotal)
            state.value.total = state.value.total - action.payload.cartItem.price
            
            // state.value.items.reduce(
            //     (acc, currentItem) => acc =   (currentItem.price * currentItem.quantity) - acc ,  0
            // )

            
 


            // state.value = {user: "Hardcoder user",
            // updatedAt: "",
            // total: null,
            // items: []}
            //Logic to remove item
         
        }
    }
})

export const {addCartItem, removeOneCartItem, removeCartItem} = cartSlice.actions

export default cartSlice.reducer


