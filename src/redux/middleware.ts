export const logger = (store: any) => (next: any) => (action: any) => {
  console.log('dispatching', action)
  const result = next(action)
  console.log('next state', store.getState())
  return result
}

export const crashReporter = () => (next: any) => (action: any) => {
  try {
    return next(action)
  } catch (err) {
    console.error('Caught an exception!', err)
    throw err
  }
}
