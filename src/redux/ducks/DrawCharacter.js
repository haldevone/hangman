const WRONGGUESS = "wrongguess";
const RIGHTGUESS = "rightguess";
const CHOOSENWORD = "choosenword";

export const wrongguess = () => ({
    type: WRONGGUESS
});

export const rightguess = () => ({
    type: RIGHTGUESS
});
export const choosenword = (a) => ({
    type: CHOOSENWORD,
    payload: a
});

const initState = {
    drawNr: 1,
    rightNr: 1,
    chosenWORD: ""
};


export default (state = initState, action) => {
    switch (action.type) {
        case WRONGGUESS:
            return {...state, drawNr: state.drawNr +1};
        case RIGHTGUESS:
            return {...state, rightNr: state.rightNr +1};
        case CHOOSENWORD:
            return {...state, chosenWORD: state.payload};
        default:
            return state;
    }
}