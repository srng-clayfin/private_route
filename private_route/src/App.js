import './App.css';
import { Route, Routes } from 'react-router-dom'  ;
import { About } from './components/About';
import { Finance } from './components/Finance';
import { Contact } from './components/Contact';
import { User } from './components/User';
import { Main } from './components/Main';
import { Protected } from './components/Protected';



function App() {
  return (
    <div className="App">
      <Main />
      <br />
      <br />     
      <br />
      <br />
      <Routes>
        
        <Route exact path='/' element={<Protected Component={User}/>} ></Route>
        <Route  path='/about' element={<Protected Component={About}/>} ></Route>
        <Route  path='/finance' element={<Protected Component={Finance}/>} ></Route>
        <Route  path='/contact' element={<Protected Component={Contact}/>} ></Route>
       
      </Routes>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
