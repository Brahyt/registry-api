import React, { useReducer } from "react";
import './App.scss';
import Routes from "../routes/Index";
import Header from "./common/Header";
import Footer from "./common/Footer";
import SearchBar from "./common/SearchBar";

const initialState = {
    loading: false,
    searchTerm: '',
    searchResults: [],
}

    const reducer = (state, action) => {
        switch(action.type) {
            case 'startSearch':
                return {loading: true, searchTerm: state.searchTerm}

            case 'returnSearch':
                return {loading: false, searchTerm: state.searchTerm, searchResults: state.searchResults}

        }
    }

const App = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const searchBuildpacks = () => {
        const payload = []
        dispatch({type: 'returnSearch', payload: {searchResults: payload}})
    }

    const startSearch = (e) => {
        if (e.keyCode === 13) {
            dispatch({type: 'startSearch', payload: e.target.value})
        }
    }

    return (
        <div className="App">
            <Header />
            <SearchBar
                startSearch={startSearch}
            />
            {Routes}
            <Footer />
        </div>
    )
}

export default App;
