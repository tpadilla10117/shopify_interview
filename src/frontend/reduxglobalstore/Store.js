/*This is the global store to handle state in the app:  */
    import { configureStore } from "@reduxjs/toolkit";


/* To change State: 

    1) create 'action' (object describing what happened) -> 
    2) 'dispatch' the action to the store 
    3) To specify how state get's updated in response to the action, write a pure 'reducer' function that calculates new state based on old state and action

*/

   /*  export const store = configureStore({
        reducer: {
           
        }
    }); */