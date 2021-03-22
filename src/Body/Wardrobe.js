import React from 'react';
import { Card, Row, Col,CardImg} from 'reactstrap';
import everyday from './Images/everyday.jpg';
import chic from './Images/chic.jpg';
import occasion from './Images/occasions.jpg';
import work from './Images/work.jpg';
import './text.css';
function Wardrobe()
{
    return (
      
        <>
             <Card body>
                 <Row>
                     <h1 style={{paddingLeft:"550px",fontSize:"40px"}}> A Perfect Wardrobe Guide</h1>
                     <br/>
                     <h4 style={{paddingLeft:"500px",fontSize:"20px"}}>Lets help you to pick a perfect style for every moment in advance</h4>
                 </Row>
                 <br/>
                <Row >
                    <Col >
                       <a href="#"> <CardImg   height="450px"   src={everyday}></CardImg></a>
                       <div class="imagetext" ><h1 style={{fontSize:"30px"}}>EVERYDAY<br/>CASUALS</h1>
                   <button class="btn">Shop Now</button>
                     </div>
                    </Col>
                    <Col>
                        <a href="#"><CardImg height="450px"  src= {chic}></CardImg></a>
                        <div class="imagetext" ><h1 style={{fontSize:"30px"}}>THE CHIC LOOK</h1>
                   <button class="btn">Shop Now</button>
                     </div>
                    </Col>
                    
                </Row>
                <br/>
                <Row >
                    <Col >
                       <a href="#"> <CardImg  height="450px"   src={occasion}></CardImg></a>
                       <div class="imagetext" ><h1 style={{fontSize:"30px"}}>OCCASIONAL WEAR</h1>
                   <button class="btn">Shop Now</button>
                     </div>
                    </Col>
                    <Col>
                        <a href="#"><CardImg height="450px"  src={work}></CardImg></a>
                        <div class="imagetext" ><h1 style={{fontSize:"30px"}}>WORK WEAR</h1>
                   <button class="btn">Shop Now</button>
                     </div>
                    </Col>
                </Row>
                    
                </Card>
     </>
    
      );
    };

export default Wardrobe;
