import React from 'react';
import { Card, Row, Col,CardImg} from 'reactstrap';
function SummerCollection()
{
    return (
      
        <>
             <Card body>
                 <Row>
                     <h1 style={{paddingLeft:"500px",fontSize:"40px"}}>The Spring Summer Edit</h1>
                 </Row>
                 <br/>
                <Row >
                    <Col >
                       <a href="#"> <CardImg  height="550px"   src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-2-2021/suit4.jpg"></CardImg></a>
                    </Col>
                    <Col>
                        <a href="#"><CardImg height="550px"  src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-2-2021/kurta4.jpg"></CardImg></a>
                    </Col>
                    <Col >
                        <a href="#"><CardImg height="550px"  src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-2-2021/dress4.jpg"></CardImg></a>
                    </Col>
                </Row>
                <Row >
                    <Col >
                       <a href="#"> <CardImg  height="500px"   src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-2-2021/anar4.jpg"></CardImg></a>
                    </Col>
                    <Col>
                        <a href="#"><CardImg height="500px"  src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-2-2021/bottom4.jpg"></CardImg></a>
                    </Col>
                </Row>
                    
                </Card>
     </>
    
      );
    };

export default SummerCollection;