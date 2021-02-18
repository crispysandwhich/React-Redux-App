import React,{useEffect} from 'react'

import {connect} from 'react-redux'
import './App.css'
import {getTrendData} from './actions/index'

// components
import Card from './components/Card'
import Header from './components/Header'



const App = (props) => {
    console.log(props)
    useEffect(() => {
        props.getTrendData()
    },[])

    return(
        <div className="main-app">
            <Header />

            
            <div className="trending">
                <h2>Trending</h2>
                <Card data={props.trending} isLoading={props.isLoading} />
            </div>
            

        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return({
        trending: state.trending,
        searchInput: state.searchInput,
        isLoading: state.isLoading
    })
}

export default connect(mapStateToProps,{getTrendData})(App)