 const CHOOSENWORD = "choosenword"
 const CHOOSENCATEGORY = "choosencategory"

 export const choosenword = (newValue) => ({
    type: CHOOSENWORD,
    payload: newValue
})

export const choosencategory = (newValue) => ({
    type: CHOOSENCATEGORY,
    payload: newValue
})

 const initState = {
     chosenWORD: "",
     choosenCAT: ""
 }
 export default (state = initState, action) => {
     switch (action.type) {
        case CHOOSENWORD:
        console.log(action.payload);
            return {...state, chosenWORD: `${action.payload}`};
        case CHOOSENCATEGORY:
        console.log(action.payload);
            return {...state, choosenCAT: `${action.payload}`};
         default:
             return state;
             console.log(state);
     }
 }
