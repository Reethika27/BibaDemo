import React from 'react'
import { Carousel } from 'react-bootstrap';
function BibaCarousel()
{
    return(
      <Carousel>
             <Carousel.Item>
                     <img className="d-block w-100"  src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=1800,height=490,quality=75,format=auto/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-3-21/holi.jpg" />
             </Carousel.Item>
             <Carousel.Item>
                      <img className="d-block w-100" src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=1800,height=490,quality=75,format=auto/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-2-2021/ss213.jpg" />
             </Carousel.Item>
            <Carousel.Item>
                      <img className="d-block w-100" src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=1800,height=490,quality=75,format=auto/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-2-2021/girls2.jpg" />
             </Carousel.Item>  
             <Carousel.Item>
                      <img className="d-block w-100" src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=1800,height=490,quality=75,format=auto/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-2-2021/up502.jpg" />
             </Carousel.Item>   
        </Carousel>    
        );
    }
export default BibaCarousel;