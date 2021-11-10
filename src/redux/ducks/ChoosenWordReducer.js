 const CHOOSENWORD = "choosenword"

 export const choosenword = (newValue) => ({
     type: CHOOSENWORD,
     payload: newValue
 })
 const initState = {
     chosenWORD: ""
 }
 export default (state = initState, action) => {
     switch (action.type) {
         case CHOOSENWORD:
            console.log(action.payload);
             return {...state, chosenWORD: `${action.payload}`};
         default:
             return state;
             console.log(state);
     }
 }
