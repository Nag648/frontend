import React, { useState } from 'react'
import './Form.css'
const Form = () => {


  const [action,setAction] = useState("Sign Up");

    return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className='underline'></div>
 /     </div>
      <div className='inputs'>
        {action==="Sign in"?<div></div>:      <div className='input'>Name:
      <input type='text'/>
      </div>
}
      <div className='input'>Email:
      <input type='email'/>
      </div>
      <div className='input'>Password: 
      <input type='password'/>
      </div>
      </div>
      {action==="sign up"?<div></div>:<div className='forgot-password'>Forgot Password? <span>Click Here</span></div>
}
      <div className='submit-container'>
        <div className={action==="Sign in"?"submit gray":"submit"} onClick={()=>{setAction("sign up")}}>Sign up</div>
        <div className={action==="Sign up"?"submit gray":"submit"} onClick={()=>{setAction("Sign in")}}>Sign in</div>
      </div>
    </div>
  )
}

export default Form