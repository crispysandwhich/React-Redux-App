import axios from 'axios'

export const FETCHIN_TREND_MEME = "FETCHIN_TREND_MEME"

export const getTrendData = () => {
  return(
    dispatch => {
      axios.get('https://api.giphy.com/v1/gifs/trending?api_key=MxunD67mKK3WoQxhaaUVYc9DndKI2dcD')
        .then(res =>  {
            console.log(res.data.data)
            dispatch({type: FETCHIN_TREND_MEME, payload: res.data.data})
        })
        .catch(err => console.log(err))
    })
}