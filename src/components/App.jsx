import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/Home Page' element={() => <h1>Home Page</h1>} />
                <Route path='/films' element={() => <h1>Films</h1>} />
                <Route path='/people' element={() => <h1>People</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;