import './reset.css';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Messenger from "./components/Messenger/Messenger";
import {Route, Routes} from "react-router-dom";
import store from "./redux/redux-store";

const App = (props) => {
    return (
            <div className='app_wrapper'>
                <Header/>
                <Navbar/>
                <Routes>
                    {/*<Route path='/' element={<Home homePages={props.state.homePages} />} />*/}
                    <Route path="/messenger/*" element={<Messenger messengerPages={store.getState().messengerPages}/> } />
                </Routes>
            </div>
    );
}


export default App;
