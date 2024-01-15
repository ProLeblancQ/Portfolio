import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../Styles/Carousel.css';

const PCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const carouselItemStyle = {
    marginLeft: '10px',
    marginRight: '20px',
  };

  const images = [
    '/Assets/ENIGME.png',
    '/Assets/Essai4.png',
    '/Assets/Essai4.png',
    '/Assets/Essai4.png',
    '/Assets/Essai4.png',
    '/Assets/Essai4.png',
    '/Assets/Essai4.png',
  ];

  const imageLinks = [
    'https://example.com/link1',
    'https://example.com/link2',
    'https://example.com/link3',
    'https://example.com/link4',
    'https://example.com/link5',
    'https://example.com/link6',
    'https://example.com/link7',
  ];

  return (
    <div className='Container-Carousel'>
      <div
        style={{
          marginLeft: '10px',
          marginRight: '10px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '95%',
          height: 'auto',
          overflow: 'hidden',
          borderRadius: '8px',
          zIndex: '2',
        }}
      >
        <Carousel
          responsive={responsive}
          showDots={false}
          infinite={true}
          removeArrowOnDeviceType={['tablet', 'mobile']}
        >
          {images.map((image, index) => (
            <a href={imageLinks[index]} key={index}>
              <div style={carouselItemStyle}>
                <img
                  className='mx-auto'
                  src={image}
                  alt={`slide-${index + 1}`}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    borderRadius: '8px',
                  }}
                />
              </div>
            </a>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default PCarousel;
