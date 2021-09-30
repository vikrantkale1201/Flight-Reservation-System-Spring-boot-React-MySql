import React from 'react';
import homepage from '../assets/images/homepage.jpg';

/**
 * 
 * @author Dhananjay
 * This component renders Carousel 
 */
function Corousal(props) {
    return (
            <div className="carousel-inner col-lg-17">
                <div className="carousel-item active">
                    <img src={homepage} width="100%" height="380" />
                </div>
            </div>
    );
}

export default Corousal;