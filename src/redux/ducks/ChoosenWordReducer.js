// const CHOOSENWORD = "choosenword";

// export const choosenword = (a) => ({
//     type: CHOOSENWORD,
//     payload: a
// });

// const initState = {
//     chosenWORD: ""
// };

// export default (state = initState, action) => {
//     switch (action.type) {
//         case CHOOSENWORD:
//             return {...state, chosenWORD: state.payload};
//         default:
//             return state;
//     }
// }
const wordReducer = (state = "", action) => {
    switch (action.type) {
        case CHOOSENWORD:
            return state + action.payload;
        default:
            return state;
    }
}

export default wordReducer;