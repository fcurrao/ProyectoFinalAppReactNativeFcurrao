import { createSlice } from "@reduxjs/toolkit";  

export const OrderSlice = createSlice({
    name: "orders",
    initialState: {
        value: {
            user: "Hardcoder user",
            updatedAt: "",
            total: null,
            items: [] 
        }
    },
    reducers: {
        addOrder: (state, action) => {
            

            //Logic to add item
            //1. Check productExists
            // const orden = action.payload

            //2. Distinct logic if exists product or not
            // state.value.
            state.value.items.push(action.payload)
            // return items
            //3. Update total
            
            //4. Update updatedAt
            state.value.updatedAt = new Date().toLocaleString()
            console.warn("AAAA", state.value.items)
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


