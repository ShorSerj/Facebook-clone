import logo from './logo.svg';
import './reset.css';
import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Discussion from './components/Discussion';

const App =  () => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <Discussion/>
    </div>
  );
}


export default App;
