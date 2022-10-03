export const cartReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return [...state, action.payload];
        case "REMOVE_FROM_CART":
            return state.filter((v, i) => i !== action.payload);
        case 'INCREMENT':
            return state.map((v, i) => {
                if (i === action.payload) {
                    v.chosen += 1;
                }
                return v;
            });
        case 'DECREMENT':
            return state.map((v, i) => {
                if (i === action.payload) {
                    v.chosen -= 1;
                }
                return v;
            }); 
            case "CLEAN":
                return []
        default:
            return state;
    }
}