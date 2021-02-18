import {FETCHIN_TREND_MEME} from '../actions/index.js'

const initialState = {
  trending: [],
  searchInput: '',
  isLoading: true
}



export const reducer = (state = initialState, action) => {
  console.log(state, action)
  switch (action.type){
    case(FETCHIN_TREND_MEME):
      return({
        ...state,
        trending: [...state.trending, action.payload],
        isLoading: false
      })
    default:
      return state
  }
}