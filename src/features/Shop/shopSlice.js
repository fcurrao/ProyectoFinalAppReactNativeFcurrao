import { createSlice } from "@reduxjs/toolkit";
import Products from '../../Data/products.json'

export const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        value: {
            categorySelected : "",
            idSelected: "", 
            allProducts: Products,
            productsSelected : [], 
        }
    },
    reducers: {
        setCategorySelected: (state, action)=>{
            state.value.productsSelected = state.value.allProducts.filter(product => product.category === action.payload)
            // productsRaw.filter(product => product.category === category && product.title.toLocaleLowerCase().includes(keyword.toLowerCase()))
            state.value.categorySelected = action.payload
        },
        setIdSelected: (state,action) => {
            state.value.idSelected = action.payload
        }
        // setProductIdSelected: (state, action)=>{
        //     state.value.setpr = action.payload
        // }, 
    }

})

export const {setCategorySelected ,setIdSelected} = shopSlice.actions

export default shopSlice.reducer