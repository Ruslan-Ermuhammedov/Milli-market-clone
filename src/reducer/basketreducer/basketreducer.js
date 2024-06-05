import { ADD_CAUNT_TO_BASKET, DELETE_FROM_BASKET, ADD_TO_BASKET } from "./basketType"

export const basketInitialState = {
    basket: []
}

export const basketReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_BASKET: {
            return (state = {
                basket: [...state.basket, action.payload]
            });
        }
        case ADD_CAUNT_TO_BASKET: {
            const newBasket = state.basket.map((item) => {
                return item.id === action.payload.id ? { ...item, count: item.count + action.payload.count } : item
            })
            return state = {
                basket: newBasket
            }
        }
        case DELETE_FROM_BASKET: {
            const filtered = state.basket.filter((item) => item.id !== action.payload.id)
            return state = {
                basket: filtered
            }
        }
        default:
            return state
    }
}









// export const basketInitialState = {
//     basket: []
// }
// export const basketReducer = (state, action) => {
//     switch (action.type) {
//         case 'ADD_TO_BASKET': {
//             return (state={
//                 basket:[...state.basket,action.payload]
//             })

//         }
//         default:
//             return state
//     }
// }