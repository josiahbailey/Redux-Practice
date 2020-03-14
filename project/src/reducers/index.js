import { FETCH_DATA, FETCH_SUCCESS, FETCH_FAIL, POST_PLAYER, POST_FAIL, POST_SUCCESS } from '../actions/actions'

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
      case POST_PLAYER:
         return {
            ...state,
            isFetching: true,
         }
      case POST_SUCCESS:
         return {
            ...state,
            players: action.payload,
            isFetching: false,
            error: ''
         }
      case POST_FAIL:
         return {
            ...state,
            isFetching: false,
            error: action.payload
         }
      default:
         return state
   }
}