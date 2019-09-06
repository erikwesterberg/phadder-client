const dispatchMessage = (message, type) => ({
  type: 'DISPATCH_MESSAGE', payload: {message: message, type: type}
})

export { dispatchMessage }