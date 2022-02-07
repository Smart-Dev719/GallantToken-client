import React from "react";
import Carousel from "react-multi-carousel";
import "../css/MintSlider.css"
import "react-multi-carousel/lib/styles.css";
import Slider1 from "assets/img/s1.png";
import Slider2 from "assets/img/s2.gif";
import Slider3 from "assets/img/s3.png";
import Slider4 from "assets/img/s4.png";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};

const MintSlider = () => {

    return (
        <>
            <Carousel
                responsive={responsive}
                className="Test crSlider"
                autoPlay={true}
                transitionDuration={5}
                infinite
            >
                <img src={Slider1} className="SliderImg" alt="" />
                <img src={Slider2} className="SliderImg" alt="" />
                <img src={Slider3} className="SliderImg" alt="" />
                <img src={Slider4} className="SliderImg" alt="" />
            </Carousel>
        </>
    )
}

export default MintSlider;