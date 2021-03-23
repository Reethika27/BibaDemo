import React from 'react'
import {FaShippingFast} from 'react-icons/fa'
import {IoStorefront} from 'react-icons/io5'
import {IoIosCall,IoMdMail} from 'react-icons/io'
import {RiLockFill} from 'react-icons/ri'
function TopHeader()
{
    const style = {
       width:"20px",
       height:"20px"
     };
     const style1 ={
         overflow: "hidden"
       };
        return(
        
            <div style={style1}>
            <nav class="navbar fixed-top navbar-expand-sm bg-white" >
            <ul class="navbar-nav">
             <li class="nav-item">
              <a class="nav-link" disabled href="#" style={{color:"grey",fontSize:"12px"}}><IoStorefront style={style}/>OFFICE STORE</a>
             </li>
             <li class="nav-item">
              <a class="nav-link" disabled href="#" style={{color:"grey",fontSize:"12px"}}>< RiLockFill style={style}/>SECURE PAYMENT</a>
             </li>
             <li class="nav-item">
              <a class="nav-link" disabled href="#" style={{color:"grey",fontSize:"12px"}}><FaShippingFast style={style}/>FREE SHIPPING</a>
             </li>
             <li class="nav-item">
              <a  class="nav-link" style={{color:"#E10600",paddingLeft:"250px"}} href="#"><strong>REGISTER AND GET RS.300 OFF</strong></a>
             </li>
             <li class="nav-item">
              <a  class="nav-link" style={{color:"grey",paddingLeft:"250px"}} href="#"><IoIosCall style={style}/> &nbsp;|
              </a>
             </li>
             <li class="nav-item">
              <a  class="nav-link" style={{color:"grey",paddingLeft:"10px"}} href="#"><IoMdMail style={style}/>&nbsp;|</a>
             </li>
             <li class="nav-item">
              <a  class="nav-link" style={{color:"black",paddingLeft:"15px",fontSize:"12px"}} href="#">Franchise&nbsp;|</a>
             </li>
 
             <li class="nav-item">
              <a  class="nav-link" style={{color:"black",paddingLeft:"5px",fontSize:"12px"}} href="#">Store Locator&nbsp;|
              </a>
             </li>
             <select style={{border:"0px",outline:"0px",width:"80px",height:"20px"}}>
                <option>INTL</option>
                <option>IND</option>
             </select>
            </ul>
           </nav>
           
           </div>
        
        );
        
}

export default TopHeader;
