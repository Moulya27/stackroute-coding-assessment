import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Products from './Pages/Products';
import Profile from './Pages/Profile';

function App() {
  return (
      <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/about' exact element={<About/>}/>
      <Route path='/contact' exact element={<Contact/>}/>
      <Route path='/products' exact element={<Products/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/profile' element={<Profile/>}/>
     </Routes>
     </BrowserRouter>
   
  );
}

export default App;
