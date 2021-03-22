import React from 'react';
import { Card, Row, Col,CardImg} from 'reactstrap';
import work from './Images/50dress.jpg';
import anar from './Images/50anark.jpg';
import kurta from './Images/50kurta.jpg';
import suit from './Images/50suit.jpg';
import fusion from './Images/fusion.jpg';
import readyts from './Images/50readyts.jpg';
import anju from './Images/anju.jpg';
import girly from './Images/girly.jpg';
import sandals from './Images/sandals.jpg';
import jewels from './Images/jewels.jpg';
import wedding from './Images/wedding.jpg';
import lehengas from './Images/lehenga.jpg';

import './text.css';
function Offer()
{
    return (
      
        <>
             <Card body>
                 <Row>
                     <h1 style={{paddingLeft:"550px",fontSize:"40px"}}>Upto 50% Off</h1>
                 </Row>
                 <br/>
                <Row >
                    <Col >
                         <a href="#"> <CardImg  height="500px"   src={suit}></CardImg></a>
                         <div class="imagetext" ><h1 style={{fontSize:"30px"}}>SUIT SETS</h1>
                         <div class="bottom-left1">
                         <button class="btn1">Shop Now</button>
                        </div>
                   </div>
                    </Col>
                    <Col>
                        <a href="#"><CardImg height="500px"  src={kurta}></CardImg></a>
                        <div class="imagetext" ><h1 style={{fontSize:"30px"}}>KURTAS</h1>
                        <div class="bottom-left1">
                         <button class="btn1">Shop Now</button>
                        </div>
                        </div>
                    </Col>
                    
                </Row>
                <br/>
                <Row >
                    <Col >
                       <a href="#"> <CardImg  height="500px"   src={anar}></CardImg></a>
                       <div class="imagetext" ><h1 style={{fontSize:"30px"}}>ANARKALIS</h1>
                       <div class="bottom-left1">
                         <button class="btn1">Shop Now</button>
                        </div>
                   </div>
                    </Col>
                    <Col>
                        <a href="#"><CardImg height="500px"  src={work}></CardImg></a>
                        <div class="imagetext" ><h1 style={{fontSize:"30px"}}>DRESSES</h1>
                        <div class="bottom-left1">
                         <button class="btn1">Shop Now</button>
                        </div>
                   </div>
                    </Col>
                </Row>
                <br/>
                <Row >
                    <Col >
                       <a href="#"> <CardImg  height="450px"   src={fusion}></CardImg></a>
                       <div class="imagetext1" ><h1 style={{fontSize:"30px",color:"#6b4423"}}>FUSION WEAR </h1>
                       <div class="bottom-left">
                         <button class="btn1">Shop Now</button>
                        </div>
                   </div>
                    </Col>
                   
                </Row>
                <br/>
                <Row >
                    <Col >
                       <a href="#"> <CardImg  height="450px"   src={anju}></CardImg></a>
                       <div class="imagetext2" ><h1 style={{fontSize:"30px",color:"#6b4423"}}> </h1>
                       <div class="bottom-left2">
                         <button class="btn">Shop Now</button>
                        </div>
                   </div>
                    </Col>
                   
                </Row>
                <br/>
                <Row >
                    <Col >
                       <a href="#"> <CardImg  height="450px"   src={girly}></CardImg></a>
                       <div class="imagetext3" ><h1 style={{fontSize:"30px",color:"#6b4423"}}> </h1>
                       <div class="bottom-left3">
                         <button class="btn">Shop Now</button>
                        </div>
                   </div>
                    </Col>
                   
                </Row>
                <br/>
                <Row >
                    <Col >
                       <a href="#"> <CardImg  height="450px"   src={readyts}></CardImg></a>
                       <div class="imagetext2" ><h1 style={{fontSize:"30px",color:"#6b4423"}}>READY TO STITCH </h1>
                       <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <div class="bottom-left">
                         <button class="btn1">Shop Now</button></div>
                         </div>
                    </Col>
                   
                </Row>
                <br/>
                <Row>
                     <h1 style={{paddingLeft:"550px",fontSize:"40px"}}>Complement Your Looks</h1>
                 </Row>
                 <br></br>
                <Row >
                    <Col >
                       <a href="#"> <CardImg  height="500px"   src={sandals}></CardImg></a>
                       <div class="imagetext" ><h1 style={{fontSize:"30px",color:"white"}}>FOOTWEAR</h1>
                       <div class="bottom-left1" style={{left:"30px"}} >
                         <button class="btn1" style={{color:"white",border:"1px solid white"}}>Shop Now</button>
                        </div>
                   </div>
                    </Col>
                    <Col>
                        <a href="#"><CardImg height="500px"  src={jewels}></CardImg></a>
                        <div class="imagetext" >
                         <div class="bottom-left1" >
                         <button class="btn1">Shop Now</button>
                        </div>
                   </div>
                    </Col>
                </Row>
                <br/>
                <Row >
                    <Col >
                       <a href="#"> <CardImg  height="450px"   src={wedding}></CardImg></a>
                       <div class="imagetext2" ><h1 style={{fontSize:"30px",color:"#6b4423"}}>WEDDING RANGE</h1>
                      
                        <div class="bottom-left">
                         <button class="btn1">Shop Now</button></div>
                         </div>
                    </Col>
                </Row>
                <br/>
                <Row >
                    <Col >
                       <a href="#"> <CardImg  height="450px"   src={lehengas}></CardImg></a>
                       <div class="imagetext2" ><h1 style={{fontSize:"30px",color:"white"}}>&nbsp;&nbsp;&nbsp;&nbsp;LEHENGAS</h1>
                      <div class="bottom-left">
                       <button class="btn1" style={{color:"white",border:"1px solid white"}}>Shop Now</button></div>
                       </div>
                    </Col>
                   
                </Row>
                    
                </Card>
     </>
    
      );
    };

export default Offer;
