import React from 'react';
import "./LoginPage.css";

function LoginPage() {
    return (
   <div className='LoginPage_background'> 
       <form className='Login'>
           <label>ID</label>
           <input type="ID" value onChange />
           <label>Password</label>
           <input type="password" value onChange />
           <br />
           <button>
               Login
           </button>
       </form>
   </div>
    )
}
export default LoginPage;