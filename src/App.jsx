import React from 'react'
import { TestModal } from './components/testModal/TestModal'
import { AppRoutes } from './AppRoutes'
import './styles/base.scss'
import './styles/app.scss'

export const App = () => {
    return (
        <div className="App">
            <AppRoutes />
            <TestModal />
        </div>
    )
}