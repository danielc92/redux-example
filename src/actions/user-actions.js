// Action creator for user
export const UPDATE_USER = 'user:update-user';

export function updateUser(userDetails) {
    return {
        type: UPDATE_USER,
        payload: {
            user: userDetails
        }
    }
}