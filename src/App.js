import logo from './logo.svg';
import './reset.css';
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Messenger from "./components/Messenger/Messenger";


import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app_wrapper'>
                <Header/>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home homePages={props.state.homePages} />} />
                    <Route path="/messenger/*" element={<Messenger messengerPages={props.state.messengerPages} addMessageUser={props.addMessageUser}/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}


export default App;
