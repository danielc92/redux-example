// User reducer

export default function (state='', action) {
    switch (action.type) {
        case 'UPDATE_USER':
            return action.payload.user
        default:
            return state
    }
}