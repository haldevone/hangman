const WRONGGUESS = "wrongguess";
const RIGHTGUESS = "rightguess";

export const wrongguess = () => ({
    type: WRONGGUESS
});

export const rightguess = () => ({
    type: RIGHTGUESS
});

const initState = {
    drawNr: 1,
    rightNr: 1,
};


export default (state = initState, action) => {
    switch (action.type) {
        case WRONGGUESS:
            return {...state, drawNr: state.drawNr +1};
        case RIGHTGUESS:
            return {...state, rightNr: state.rightNr +1};
        default:
            return state;
    }
}