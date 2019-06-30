// Action creator for user
export const UPDATE_USER = 'user:update-user';

export function updateUser(name) {
    return {
        type: UPDATE_USER,
        payload: {
            user: {name: name}
        }
    }
}