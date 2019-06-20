// import React from 'react'
// // import ArrowBack from '@material-ui/icons/ArrowBackIos'

// const NextArrow = (props) => {
//   const { className, onClick } = props;
//   return (
//     <img
//       className={className}
//       onClick={onClick}
//       src="https://res.cloudinary.com/crimson-flamingo/image/upload/v1556246179/230419%20Icons/rightarrow.png"
//       alt="left"
//     />
//   );
// }

// const PrevArrow = (props) => {
//   const { className, onClick } = props;
//   return (
//     <img
//       className={className}
//       onClick={onClick}
//       src="https://res.cloudinary.com/crimson-flamingo/image/upload/v1556246179/230419%20Icons/leftarrow.png"
//       alt="right"
//       />
//     );
// }

export const settings = {
  dots: false,
  infinite: true,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  // nextArrow: <NextArrow />,
  // prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 2048,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 9999,
      settings: {
        slidesToShow: 5,
      }
    }
  ]
};
