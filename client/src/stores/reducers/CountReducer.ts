export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.step }
    case 'DECREMENT':
      return { count: state.count - action.step }
    default:
      throw new Error('Unsupported action type:', action.type)
  }
}