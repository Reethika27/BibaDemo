import React from 'react';
import { Card, Row, Col,CardImg} from 'reactstrap';
import './text.css';
import mnc from './Images/mnc.jpg';
import athlei from './Images/athlei.jpg';
import fun  from './Images/fun.jpg';
import rts from './Images/RTS.jpg';
import foot from './Images/foot.jpg';
import jewel  from './Images/jewel.jpg';
function NewCollections()
{
    const style = {
        fontWeight:"Bold",
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
                     <h1 style={{paddingLeft:"550px",fontSize:"40px"}}>Newly Introduced</h1>
                 </Row>
                 <br/>
                <Row >
                    <Col  >
                       <a href="#"> <CardImg  height="550px"   src={mnc}></CardImg></a>
                       <div class="centered" ><h1 style={{fontSize:"30px"}}>MASK & CHAIN</h1></div>
                    </Col>
                    <Col>
                        <a href="#"><CardImg height="550px"  src={athlei}></CardImg></a>
                        <div class="centered1" ><h1 style={{fontSize:"30px"}}>ATHLEISURE</h1></div>
                    </Col>
                    <Col >
                        <a href="#"><CardImg height="550px"  src={fun}></CardImg></a>
                        <div class="centered" ><h1 style={{fontSize:"30px"}}>FUN CASUALS</h1></div>
                    </Col>
                </Row>
                <Row >
                    <Col >
                       <a href="#"> <CardImg  height="500px"   src={rts}></CardImg></a>
                       <div class="centered" ><h1 style={{fontSize:"30px"}}>READY TO STITCH</h1></div>
                    </Col>
                    <Col>
                        <a href="#"><CardImg height="500px"  src={foot}></CardImg></a>
                        <div class="centered1" ><h1 style={{fontSize:"30px"}}>FOOTWEAR</h1></div>
                    </Col>
                    <Col>
                        <a href="#"><CardImg height="500px"  src={jewel}></CardImg></a>
                        <div class="centered" ><h1 style={{fontSize:"30px"}}>JEWELLERY</h1></div>
                    </Col>
                </Row>
                    
                </Card>
     </>
    
      );
    };

export default NewCollections;
