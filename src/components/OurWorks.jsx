/* eslint-disable no-undef */
import swiper1 from '../assets/images/swiper1.jpg';
import swiper2 from '../assets/images/swiper2.jpg';
import swiper3 from '../assets/images/swiper3.jpg';
import swiper4 from '../assets/images/swiper4.jpg';
import swiper5 from '../assets/images/swiper5.jpg';
import swiper6 from '../assets/images/swiper6.jpg';
import swiper7 from '../assets/images/swiper7.jpg';
import swiper8 from '../assets/images/swiper8.jpg';
import swiper9 from '../assets/images/swiper9.jpg';
import swiper10 from '../assets/images/swiper10.webp';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../swiper-custom.css'; // Import your custom CSS file

// import required modules
import { Autoplay, Pagination } from 'swiper';

const OurWorks = () => {
  const images = [
    swiper1,
    swiper2,
    swiper3,
    swiper4,
    swiper5,
    swiper6,
    swiper7,
    swiper8,
    swiper9,
    swiper10,
  ];
  return (
    <>
      <Swiper
        style={{
          '--swiper-pagination-bullet-size': '12px',
        }}
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className=" mySwiper  h-section  lg:h-swiper my-20 swiper-container xl:container xl:mx-auto "
      >
        {images.map(image => {
          return (
            <SwiperSlide key={image} className=" px-2  sm:px-0  ">
              <img
                src={image}
                className="w-full  sm:w-4/6 md:w-3/6 h-full mx-auto rounded"
                alt={image + 1}
              />
              =
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default OurWorks;
