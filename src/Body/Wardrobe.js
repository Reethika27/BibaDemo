import React from 'react';
import { Card, Row, Col,CardImg} from 'reactstrap';
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
                       <a href="#"> <CardImg   height="450px"   src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-2-2021/everyday-casuals.jpg"></CardImg></a>
                    </Col>
                    <Col>
                        <a href="#"><CardImg height="450px"  src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-2-2021/chic.jpg"></CardImg></a>
                    </Col>
                    
                </Row>
                <br/>
                <Row >
                    <Col >
                       <a href="#"> <CardImg  height="450px"   src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-2-2021/occasion.jpg"></CardImg></a>
                    </Col>
                    <Col>
                        <a href="#"><CardImg height="450px"  src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-3-21/work.jpg"></CardImg></a>
                    </Col>
                </Row>
                    
                </Card>
     </>
    
      );
    };

export default Wardrobe;