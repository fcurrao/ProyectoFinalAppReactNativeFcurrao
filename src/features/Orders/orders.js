import { createSlice } from "@reduxjs/toolkit";  

export const OrderSlice = createSlice({
    name: "orders",
    initialState: {
        value: {
            numberOrder: 0,
            user: "Hardcoder user",
            updatedAt: "",
            total: 0,
            items: [] 
        }
    },
    reducers: {
        addOrder: (state, action) => {
            state.value.total = 0

            //Logic to add item
            //1. Check productExists
            // const orden = action.payload

            //2. Distinct logic if exists product or not
            // state.value.
            state.value.items.push(action.payload)
            // return items
            //3. Update total
            state.value.numberOrder =   Math.floor(Math.random() * 1000000)
            action.payload.CartData.map( product =>{
                const currentSubTotal = product.quantity * product.price  
                state.value.total +=   currentSubTotal  
            })
            // console.warn("AAAA  fff  1 ", state.value.total)
            // console.warn("AAAA  fff  2123132 ", action.payload.CartData)
            // console.warn("AAAA  fff  1 ", action.payload.price) 
            // console.warn("AAAA  fff  2", currentSubTotal) 
            // console.warn("AAAA ff 3", state.value.total)
            // state.value.total = state.value.items.reduce(
            //     (acc, currentItem) => acc += currentItem.price * currentItem.quantity,
            //     0
            // )
            //4. Update updatedAt
            state.value.updatedAt = new Date().toLocaleString()
        },
        removeOrder: (state,action) => {
            state.value = {user: "Hardcoder user",
            updatedAt: "",
            total: null,
            items: []}
            //Logic to remove item
         
        }
    }
})

export const {addOrder, removeOrder} = OrderSlice.actions

export default OrderSlice.reducer


