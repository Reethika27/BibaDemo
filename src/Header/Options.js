import React, { useState, useEffect } from 'react';
import './Navbar.css';

import DisplayCard from './DisplayCard';

import { Badge } from 'react-bootstrap';

const navLinks = [
    {
        text:"NEW ARRIVAL",
        link:"#Sarees",
        badgeRequired:false
    },
    {
        text:"SUIT SETS",
        link:"#Lehengas",
        badgeRequired:false
    },
    {
        text:"MIX AND MATCH",
        link:"#SalwarKamees",
        badgeRequired:false
    }, 
    {
        text:"GIRLS",
        link:"#Kurtis",
        badgeRequired:false
    }, 
    {
        text:"BIBA BY ANJU MODI",
        link:"#Jewellery",
        badgeRequired:false
    }, 
    {
        text:"SLEEPWEAR",
        link:"#Kids",
        badgeRequired:false
    }, 
    {
        text:"EASY STITCH",
        link:"#Mens",
        badgeRequired:false
    },
    {
        text:"FOOTWEAR ",
        link:"#Luxe",
        badgeRequired:false
    },
    {
        text:"BOOTOM WEAR",
        link:"#Collections",
        badgeRequired:false
    },
    {
      text:"JEWELLERY",
      link:"#Home&Living",
      badgeRequired:false
    },
    {
      text:"FACTORY OUTLET",
      link:"#Home&Living",
      badgeRequired:false
    },
    {
      text:"SHOP BY OCCASION",
      link:"#Home&Living",
      badgeRequired:false
    },
    {
      text:"BLOG",
      link:"#Home&Living",
      badgeRequired:false
    }
]

    const checkTab = (str) => {
        let tabs = ["Sarees","Lehengas","Salwar Kamees","Kurtis","Jewellery","Kids","Mens","Home & Living","Luxe ","Collections"]
        if(tabs.includes(str)){
            return true;
        }
        return false;
    }

  
function Navbar() {
    const [showDisplay, setShowDisplay] = useState(false);
    const [displayTab, setDisplayTab] = useState([]);

    useEffect(() => {
        if(showDisplay){
            const hoverSection = document.getElementById("hover");
            hoverSection.classList.remove("hover-section-remove");
            hoverSection.classList.add("hover-section-show");
        }
        else{
            const hoverSection = document.getElementById("hover");
            hoverSection.classList.remove("hover-section-show");
            hoverSection.classList.add("hover-section-remove")
        }
    },[showDisplay, displayTab])

    return(
        <div className="nav">
            <div className="navbar">
                { 
                    navLinks.map( 
                        (navLink,idx) => <a 
                        onMouseEnter={e => {
                            setShowDisplay(true);
                            let selectedTab = e._targetInst.memoizedProps.children[0];
                          
                            }} 
                        onMouseLeave={() => {
                            setShowDisplay(false);
                        }} className="anchors" key={idx} href={navLink.link}>
                            { navLink.text }
                            { 
                                navLink.badgeRequired &&
                                <Badge variant="danger">{ navLink.badgeText }</Badge> 
                            }
                            </a>) 
                }
                 
            </div> 
            <div id="hover" style={{postion:"absolute"}}
                onMouseEnter={() => setShowDisplay(true)} 
                onMouseLeave={() => setShowDisplay(false)} 
                className="hover-section-remove"
            >
                <DisplayCard cardDetails={displayTab}/>
            </div> 
        </div>
    
    );
}

export default Navbar;
