import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { App } from './App'
import PageStore from './store/PageStore'

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Router>
        <Context.Provider value={{
            page: new PageStore(),
        }}>
            <App />
        </Context.Provider>
    </Router >
)
