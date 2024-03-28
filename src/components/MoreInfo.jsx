import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { moreInfo } from '../Data/data';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../swiper-custom.css'; // Import your custom CSS file

function MoreInfo() {
  return (
    <div className="flex mt-20 bg-slate-300 h-72 xl:container xl:mx-auto">
      <Swiper
        style={{
          '--swiper-pagination-color': '#FFBA08',
          '--swiper-pagination-bullet-size': '12px',
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        {moreInfo.map(task => {
          return (
            <SwiperSlide className="pt-16 text-center " key={task.header}>
              <p className="md:text-2xl ">{task.text}</p>
              <h3 className="mt-10">{task.header}</h3>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default MoreInfo;
