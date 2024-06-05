export const taskInitialState = {
    task: []
}

export const basketReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK": {
            return (state = {
                basket: [...state.basket, action.payload]
            });
        }
        case "ADD_REPEATEDLY_TASK": {
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