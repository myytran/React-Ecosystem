export const CREATE_TODO = 'CREATE_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

//export a function that takes an argument and return an action object with the argument as payload
export const createTodo = text => ({
    type: CREATE_TODO, 
    payload: { text },
})

export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: { text }
})