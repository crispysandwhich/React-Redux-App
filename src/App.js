import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Card from './components/Card'

const initialState = {
    trending: [],
    searchInput: '',
    isLoading: true
}

const App = () => {
    const [initalState, setInitialState] = useState(initialState)

    useEffect(() => {
        axios.get('https://api.giphy.com/v1/gifs/trending?api_key=MxunD67mKK3WoQxhaaUVYc9DndKI2dcD')
        .then(res =>  {
            console.log(res.data.data)
            setInitialState({
                ...initalState,
                trending: [res.data.data],
                isLoading: false,
            })
        })
        .catch(err => console.log(err))
    },[])

    

    return(
        <div>
            <header>
                <h2>de_Meeme</h2>
                <p>Get your latest luaghs</p>
            </header>


            <div>

                <div className="trending">
                    {/* 
                        1. URL <image>
                        2. UserName <p>
                        3. Title <h2>
                        ? where it was found <?link>
                     */}

                    <Card data={initalState.trending} isLoading={initalState.isLoading} />
                    

                </div>

            </div>

        </div>
    )
}

export default App