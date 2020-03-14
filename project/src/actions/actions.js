import axios from 'axios'

export const FETCH_DATA = 'FETCH_DATA'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAIL = 'FETCH_FAIL'

export const getData = () => dispatch => {
   dispatch({ type: FETCH_DATA })
   axios.get(`http://localhost:8888/players`)
      .then(res => {
         console.log(res)
         dispatch({ type: FETCH_SUCCESS, payload: res.data })
      })
      .catch(err => {
         console.log(err)
         dispatch({ type: FETCH_FAIL, payload: err })
      })
}

export const POST_PLAYER = 'ADD_PLAYER'
export const POST_SUCCESS = 'POST_SUCCESS'
export const POST_FAIL = 'POST_FAIL'

export const addPlayer = player => dispatch => {
   dispatch({ type: POST_PLAYER })
   axios.post(`http://localhost:8888/players`, player)
      .then(res => {
         dispatch({ type: POST_SUCCESS, payload: res.data })
      })
      .catch(err => {
         dispatch({ type: POST_FAIL, payload: err })
      })
}



