import React from 'react';
import { Card, Row, Col,CardImg} from 'reactstrap';
import './text.css';
import anark from './Images/anark.jpg';
import bottom from './Images/bottom.jpg';
import suit from './Images/girls.jpg';
import kurthi from './Images/kurthi.jpg';
import indie  from './Images/dresses.jpg';
function SummerCollection()
{
      const style = {
        
        fontStyle:"sans-serif" ,
        color:"black",
        display: "block",
        align:"center",
        fontWeight:"20px"
      };
    return (
      
        <>
             <Card body>
                 <Row>
                     <h1 style={{paddingLeft:"500px",fontSize:"40px"}}>The Spring Summer Edit</h1>
                 </Row>
                 <br/>
                <Row >
                    <Col class ="container">
                       <a href="#"> <CardImg  height="550px"   src={suit}></CardImg>
                       <div class="centered" ><h1 style={{fontSize:"30px"}}>SUIT SETS</h1></div>
                       </a>
                    </Col>
                    <Col  class ="container">
                        <a href="#"><CardImg height="550px"  src={kurthi}></CardImg></a>
                        <div class="centered1" ><h1 style={{fontSize:"30px"}}>KURTAS</h1></div>
                    </Col>
                    <Col   class ="container">
                        <a href="#"><CardImg height="550px"  src={indie}></CardImg></a>
                        <div class="centered" ><h1 style={{fontSize:"30px"}}>INDIE DRESSES</h1></div>
                    </Col>
                </Row>
                <Row >
                    <Col  class ="container">  
                     <a href="#"> <CardImg  height="500px"   src={anark}></CardImg></a>
                     <div class="imagetext" ><h1 style={{fontSize:"30px"}}>ANARKALIS</h1>
                   <button class="btn">Shop Now</button>
                     </div>
                    </Col>
                    <Col  class ="container">
                        <a href="#"><CardImg height="500px"  src={bottom}></CardImg></a>
                        <div class="imagetext" ><h1 style={{fontSize:"30px"}}>BOTTOM WEAR</h1>
                        <button class="btn">Shop Now</button>
                       </div>
                    </Col>
                </Row>
                    
                </Card>
     </>
    
      );
    };

export default SummerCollection;
