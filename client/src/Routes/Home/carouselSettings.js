import React from 'react'

const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <img
        className={className}
        onClick={onClick}
        src="https://res.cloudinary.com/crimson-flamingo/image/upload/v1556246179/230419%20Icons/rightarrow.png"
        alt="left"
      />
    );
}

const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <img
        className={className}
        onClick={onClick}
        src="https://res.cloudinary.com/crimson-flamingo/image/upload/v1556246179/230419%20Icons/leftarrow.png"
        alt="right"
        />
    );
}

export const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
            }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          }
        }, 
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 5,
          }
        }, 
        {
          breakpoint: 2048,
          settings: {
            slidesToShow: 6,
          }
        },  
        {
          breakpoint: 2600,
          settings: {
            slidesToShow: 7,
          }
        }    
    ]
};
