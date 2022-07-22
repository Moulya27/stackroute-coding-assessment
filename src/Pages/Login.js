import React, { useState } from 'react'
import Profile from './Profile'
function Login() {
    const [name,setName] = useState()
    const [password,setPassword] = useState()
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        setIsShown(current => !current);
      };

  return (
    <div style={{marginTop:'4rem'}}>
       <form onClick={(e)=>e.preventDefault()} >
<div class="row g-3 align-items-center mt-3">
  <div class="col-auto">
    <label for="name" class="col-form-label">Username</label>
  </div>
  <div class="col-auto">
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}   id="name" class="form-control" aria-describedby="passwordHelpInline"/>
  </div>

</div>
<div class="row g-3 align-items-center mt-3">
  <div class="col-auto">
    <label label for="inputPassword" class="col-form-label">Password</label>
  </div>
  <div class="col-auto">
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}   id="password" class="form-control" aria-describedby="passwordHelpInline"/>
  </div>
</div>
<div class="row g-3 align-items-center mt-3">
<div class="col-auto">
  <button type="submit" class="btn btn-primary" onClick={handleClick}>Submit</button>
  </div>
  </div>
  <div class="row g-3 align-items-center mt-3">

  </div>
</form>
{isShown && <Profile name = {name}/>}
    </div>

  )
}

export default Login