
import './App.css';

import About from './component/about/about';
import Experience from './component/experience/experience';

import Home from './component/home/home'

import Contact from './component/contact/contact';

import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Routes>

<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/experience' element={<Experience/>}/>
<Route path='/contact' element={<Contact/>}/>



</Routes>
    </>
  );
}

export default App;
