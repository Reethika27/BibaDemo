import React from 'react';
import { Card, Row, Col,CardImg} from 'reactstrap';
import './text.css';
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
                       <a href="#"> <CardImg  height="550px"   src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-2-2021/maskglass.jpg"></CardImg></a>
                       <div class="centered" ><h1 style={{fontSize:"30px"}}>MASK & CHAIN</h1></div>
                    </Col>
                    <Col>
                        <a href="#"><CardImg height="550px"  src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-2-2021/athleisure.jpg"></CardImg></a>
                        <div class="centered1" ><h1 style={{fontSize:"30px"}}>ATHLEISURE</h1></div>
                    </Col>
                    <Col >
                        <a href="#"><CardImg height="550px"  src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-2-2021/girlsb.jpg"></CardImg></a>
                        <div class="centered" ><h1 style={{fontSize:"30px"}}>FUN CASUALS</h1></div>
                    </Col>
                </Row>
                <Row >
                    <Col >
                       <a href="#"> <CardImg  height="500px"   src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-3-21/rts.jpg"></CardImg></a>
                       <div class="centered" ><h1 style={{fontSize:"30px"}}>READY TO STITCH</h1></div>
                    </Col>
                    <Col>
                        <a href="#"><CardImg height="500px"  src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-3-21/footwear.jpg"></CardImg></a>
                        <div class="centered1" ><h1 style={{fontSize:"30px"}}>FOOTWEAR</h1></div>
                    </Col>
                    <Col>
                        <a href="#"><CardImg height="500px"  src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-3-21/jewellery.jpg"></CardImg></a>
                        <div class="centered" ><h1 style={{fontSize:"30px"}}>JEWELLERY</h1></div>
                    </Col>
                </Row>
                    
                </Card>
     </>
    
      );
    };

export default NewCollections;
