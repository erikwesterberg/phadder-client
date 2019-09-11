const updateUserLocation = location => ({
  type: "UPDATE_LOCATION", payload: {location: location}
})

export { updateUserLocation }