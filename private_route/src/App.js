import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom'  ;
import { About } from './components/About';
import { Finance } from './components/Finance';
import { Contact } from './components/Contact';
import { User } from './components/User';
import { Main } from './components/Main';



function App() {
  return (
    <div className="App">
      <Main />
      <br />
      <br />
      <br />
      <br />
      <Routes>
        
        <Route exact path='/' element={<User />} ></Route>
        <Route  path='/about' element={<About />} ></Route>
        <Route  path='/finance' element={<Finance />} ></Route>
        <Route  path='/contact' element={<Contact />} ></Route>
       
      </Routes>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
