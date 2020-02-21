import { FETCH_DATA, FETCH_SUCCESS, FETCH_FAIL } from '../actions/actions'

const initalState = {
   players: [],
   isFetching: false,
   error: ''
}

export const reducer = (state = initalState, action) => {
   switch (action.type) {
      case FETCH_DATA:
         return {
            ...state,
            isFetching: true
         }
      case FETCH_SUCCESS:
         return {
            ...state,
            isFetching: false,
            players: action.payload,
            error: ''
         }
      case FETCH_FAIL:
         return {
            ...state,
            error: action.payload,
            isFetching: false
         }
      default:
         return state
   }
}