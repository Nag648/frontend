import React, { useState, useEffect } from 'react'
import './Form.css'
import axios from 'axios';


const Form = () => {


  const [action,setAction] = useState("Sign up");
  const [Name,steName] = useState("");
  const [Email,steEmail] = useState("");
  const [Password,stePassword] = useState("");

  const [errors,setErrors]=useState({
    Name : "",
    Email : "",
    Password : ""
  });


  function 


    return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className='underline'></div>
 /     </div>
      <div className='inputs'>
        {action==="Sign in"?<div></div>:<div className='input'>Name:
      <input type='text' value={Name}
      onChange={(e)=>{steName(e.target.value)}}
      />
            {errors.Name&&<span>{errors.Name}</span>}


      </div>
}
      <div className='input'>Email:
      <input type='email' value={Email}
      onChange={(e)=>{steEmail(e.target.value)}}/>
            {errors.Email&&<span>{errors.Email}</span>}

      </div>
      <div className='input'>Password: 
      <input type='password' value={Password}
      onChange={(e)=>{stePassword(e.target.value)}}/>
      {errors.Password&&<span>{errors.Password}</span>}
      </div>
      </div>
      {action==="sign up"?<div></div>:<div className='forgot-password'>Forgot Password? <span>Click Here</span></div>
}
      <div className='submit-container'>
        <div className={action==="Sign in"?"submit gray":"submit"} onClick={()=>{setAction("Sign up")
          // console.log("Name",Name);
          // console.log("Email",Email);
          // console.log("Password",Password);
        }}>Sign up</div>
        <div className={action==="Sign up"?"submit gray":"submit"} onClick={()=>{setAction("Sign in")}}>Sign in</div>
      </div>
    </div>
  )
}

export default Form