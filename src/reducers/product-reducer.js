// Products reducer

export default function (state=[], action) {
    switch (action.type) {
        case 'ADD_PRODUCT':
            let state_copy = state;
            state_copy.push(action.payload.product)
            return state_copy
        default:
            return state
    }
}