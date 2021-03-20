import React from 'react'
import './Options.css';
function Header()
{  
    const style = {
        fontWeight:"Bold",
        fontStyle:"sans-serif" ,
        color:"black",
        display: "block",
        align:"center",
        fontWeight:"12px"
      };
    
        return(
           <div>
              <nav class="navbar navbar-expand-sm bg-white">
                <ul class="navbar-nav">
                      <li class="nav-item" >
                        <a class="nav-link" disabled href="#" style={style}>NEW ARRIVALS</a>
                      </li>
                      <li class="nav-item" >
                        <a class="nav-link" disabled href="#" style={style}>SUIT SETS</a>
                      </li>
                      <li class="nav-item" >
                        <a class="nav-link" disabled href="#" style={style}>MIX AND MATCH</a>
                      </li>
                      <li class="nav-item" >
                        <a class="nav-link" disabled href="#" style={style}>GIRLS</a>
                      </li>
                      <li class="nav-item" >
                        <a class="nav-link" disabled href="#" style={style}>BIBA BY ANUJ MODI</a>
                      </li>
                      <li class="nav-item" >
                        <a class="nav-link" disabled href="#" style={style}>SLEEPWEAR</a>
                      </li>
                      <li class="nav-item" >
                        <a class="nav-link" disabled href="#" style={style}>EASY STITCH</a>
                      </li>
                      <li class="nav-item" >
                        <a class="nav-link" disabled href="#" style={style}>FOOTWEAR</a>
                      </li>
                      <li class="nav-item" >
                        <a class="nav-link" disabled href="#" style={style}>BOTTOMWEAR</a>
                      </li>
                      <li class="nav-item" >
                        <a class="nav-link" disabled href="#" style={style}>JEWELLERY</a>
                      </li>
                      <li class="nav-item" >
                        <a class="nav-link" disabled href="#" style={style}>FACTORY OUTLET</a>
                      </li>
                      <li class="nav-item" >
                        <a class="nav-link" disabled href="#" style={style}>SHOP BY OCCASION</a>
                      </li>
                      <li class="nav-item" >
                        <a class="nav-link" disabled href="#" style={style}>BLOG</a>
                      </li>
                </ul>
              </nav>
           </div>
        );
    
}

export default Header;