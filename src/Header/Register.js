import React from 'react'
import { BiShoppingBag ,BiSearch} from "react-icons/bi";
function Register()
{
    const style = {
        color:"white",
        backgroundColor:"rgb(150, 10, 17)"
     };
        return( 
         
          <div>
           <br/><br/>
         <nav class="navbar fixed navbar-expand-sm bg-white">
         <ul class="navbar-nav">
               <li class="nav-item" >
                  <img src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/logo.png" />
               </li>
               <li class="nav-item" style={{paddingLeft:"250px"}}>
                  <input type="text" placeholder="what are you looking for?" style={{width:"400px"}}  />
                  <BiSearch style={{width:"30px",height:"40px"}}/> 
               </li>
               <li  class="nav-item" style={{paddingLeft:"300px"}}> 
               <button class="but-hov" style={style} type="submit">Login</button>
               </li>
               <li class="nav-item" style={{paddingLeft:"10px"}}>
               <button class="but-hov" style={style} type="submit">Register</button>
               </li>
               <li class="nav-item" style={{paddingLeft:"15px"}}>
                <a href="#"><BiShoppingBag style={{width:"30px",height:"40px", color:"black"}}/></a>
               </li>
         </ul>
         
         </nav>
         
         </div>
      
        );
    
}

export default Register;
