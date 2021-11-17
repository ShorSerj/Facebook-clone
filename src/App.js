import logo from './logo.svg';
import './reset.css';
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Messenger from "./components/Messenger/Messenger";


import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div className='app_wrapper'>
                <Header/>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path="/messenger/*" element={<Messenger/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}


export default App;
