import { FETCH_DATA, FETCH_SUCCESS, FETCH_FAIL } from '../actions/actions'

const initalState = {
   players: [],
   isFetching: false,
   error: ''
}

export const reducer = (state = initalState, action) => {
   switch (action.type) {
      default:
         return state
   }
}