export default function quotes (state = [], action)  {
  let index;
  let newState;

  switch(action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId)
      newState = [...state]
      newState[index] = {...newState[index], votes: newState[index].votes + 1}
      return newState
    case 'DOWNVOTE_QUOTE':
      index = state.findIndex(quote=> quote.id === action.quoteId)
      newState = [...state]
      newState[index].votes > 0 ?
      newState[index] = {...newState[index], votes: newState[index].votes - 1}
      : null 
      return newState 
    default:
      return state
  }
}
