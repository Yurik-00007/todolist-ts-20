import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {BrowserRouter, HashRouter} from 'react-router-dom'
import {CircularProgress} from '@mui/material';
import './App.css'
import {ErrorSnackbar} from 'common/components'
import {useActions} from 'common/hooks';
import {selectIsInitialized} from 'app/app.selectors';
import {authThunks} from 'features/auth/auth.reducer';
import {Header} from "app/Header/Header";
import {Routing} from "app/Routing/Routing";

function App() {
    const isInitialized = useSelector(selectIsInitialized)

    const {initializeApp} = useActions(authThunks)

    useEffect(() => {
        initializeApp({})
    }, [])


    if (!isInitialized) {
        return <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress/>
        </div>
    }

    return (
/*
        <BrowserRouter>
*/
        <HashRouter>
            <div className="App">
                <ErrorSnackbar/>
                <Header/>
                <Routing/>
            </div>
        </HashRouter>
/*
        </BrowserRouter>
*/
    )
}

export default App
