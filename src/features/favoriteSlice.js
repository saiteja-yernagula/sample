import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice=createSlice({

    name:'favorites',
    initialState:[],
    reducers:{
        addFavorite:(state,action)=>{
           state.push(action.payload)
       
        },
        removeFavorite:(state,action)=>{
            return state.filter(destination=>destination.id!=action.payload)
        }
    }
})

export const {addFavorite,removeFavorite}=favoriteSlice.actions

export default favoriteSlice.reducer