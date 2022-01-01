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
 const ChoosenWordReducer = (state = initState, action) => {
     switch (action.type) {
        case CHOOSENWORD:
            return {...state, chosenWORD: `${action.payload}`};
        case CHOOSENCATEGORY:
            return {...state, choosenCAT: `${action.payload}`};
         default:
             return state;
     }
 }
 export default ChoosenWordReducer
