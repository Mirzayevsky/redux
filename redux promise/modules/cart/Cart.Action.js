export const addToCart = (data)=>({
    type:"ADD_TO_CART",
    payload:data
})

export const removeFromCart = (index) =>({
    type:"REMOVE_FROM_CART",
    payload:index
})

export const increment = (index) =>({
  type:"INCREMENT",
  payload:index
})

export const decrement = (index) =>({
  type:"DECREMENT",
  payload:index
})