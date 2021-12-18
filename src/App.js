import React from 'react';
import './reset.css';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import Authorization from './components/Authorization/Authorization.jsx';
import Messenger from './components/Messenger/Messenger.jsx';
import {Route, Routes} from 'react-router-dom';
import store from './redux/redux-store';
import FriendsContainer from './components/Friends/FriendsContainer';

const App = () => {
    return (
            <div className='app_wrapper'>
                <Header/>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/friends' element={<FriendsContainer/>} />
                    <Route path='/logIn' element={<Authorization/>}/>
                    <Route path="/messenger/*" element={<Messenger messengerPages={store.getState().messengerPages}/> }/>
                </Routes>
            </div>
    );
}


export default App;
