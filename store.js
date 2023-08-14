import {configureStore} from "@reduxjs/toolkit";
import  restaurantSlice  from "./components/reducers/restaurantSlice"

const store = configureStore({
    reducer:{
        restaurants:restaurantSlice,

    }

});

export default store;