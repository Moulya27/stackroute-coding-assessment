import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import './NavBar.css'

function NavBar() {
    const navigate = useNavigate()
   
   
  return (
    <nav class="navbar navbar-expand-lg fixed-top ">  
    
   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">  
    <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse " id="navbarSupportedContent">     <ul class="navbar-nav mr-4">
    <li class="nav-item">
        <Link className="nav-link"  to='/'>Home</Link>
        </li>  
   <li class="nav-item">
   <Link className="nav-link"  to='/about'>About</Link>  
    </li>
    <li class="nav-item"> 
    <Link className="nav-link"  to='/contact'>Contact Us</Link>   </li> 
   <li class="nav-item">  
   <Link className="nav-link"  to='/products'>Products</Link>   </li> 
      <li class="nav-item">  
      <button onClick={()=>navigate('/login')}  type="button" class="btn btn-primary">Login</button></li>
      <li class="nav-item">  
      <button type="button" class="btn btn-primary">Register</button></li>
   </ul> 
   </div></nav>
  )
}

export default NavBar