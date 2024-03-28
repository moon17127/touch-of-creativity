import React from 'react';

const Location = () => {
  return (
    <div className="relative py-6 mx-auto md:pr-32 h-iframe md:ml-4 md:h-section lg:container lg:mx-auto ">
      <div className="absolute z-10 hidden rounded w-44 md:block md:h-28 bg-slate-300 top-2/4 lg:right-10 lg:w-72 ">
        <h3 className="m-2 font-bold text-center text-red-500 sm:text-lg lg:text-2xl">
          العنوان
        </h3>
        <p className="p-1 md:p-2 sm:text-sm lg:text-lg"> الخُبر بجوار داي</p>
      </div>

      <iframe
        className="w-full h-full px-4 rounded"
        title="location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.724415728494!2d50.22136269999999!3d26.303032500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e98ec73762b7%3A0x87ba8d42bfca77e8!2sThe%20Curb!5e0!3m2!1sar!2seg!4v1711593195454!5m2!1sar!2seg"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Location;
