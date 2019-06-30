export const ADD_PRODUCT = 'product:add-product';

export function addProduct(product) {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}