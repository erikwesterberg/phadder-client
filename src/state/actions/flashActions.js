const dispatchMessage = (message, type) => ({
  type: 'DISPATCH_MESSAGE', payload: {message: message, type: type}
})

const clearMessage = () => ({
  type: 'CLEAR_MESSAGE'
})

export { dispatchMessage, clearMessage }