import React, { useState } from 'react';
import { ServicesData } from '../Data/data';

function Services() {
  const [status, setStatus] = useState(false);
  return (
    <div className="container px-4 mx-auto my-20 ">
      <h1 className="my-12 text-6xl "> خدماتنا</h1>
      <div className="flex flex-row-reverse flex-wrap justify-between gap-5 lg:px-12 ">
        {ServicesData.map(item => (
          <div
            key={item.title}
            className="flex flex-col items-center text-center md:w-5/12 "
          >
            <div className="relative overflow-hidden rounded-lg ">
              <img
                src={item.img}
                className="transition-transform duration-1000 sm:w-full sm:h-full duration_speed hover:scale-150 md:h-52 md:w-[450px]"
                alt={item.title}
              />
            </div>
            <h2 className="my-6 text-3xl ">{item.title}</h2>
            <div>
              {item.text[0].includes('العزل المائي') ? (
                <p className="mb-2 italic break-normal text-slate-500">
                  {item.text[0]}
                  <br /> {item.text[1]}
                  {!status ? (
                    <button
                      className="px-2 text-sm italic font-normal rounded-md text-yellow-950 bg-red-400/50"
                      onClick={() => setStatus(e => !e)}
                    >
                      عرض المزيد
                    </button>
                  ) : (
                    ''
                  )}
                </p>
              ) : (
                <p className="mb-2 italic break-normal text-slate-500">
                  {item.text[0]}
                </p>
              )}
              {status && item.text[0].includes('العزل المائي') ? (
                <>
                  <p className="mb-2 italic break-normal text-slate-500">
                    {item.text[2]}
                  </p>
                  <p className="mb-6 italic break-normal text-slate-500">
                    {item.text[3]}{' '}
                    <button
                      className="px-2 text-sm italic font-normal rounded-md text-yellow-950 bg-red-400/50"
                      onClick={() => setStatus(e => !e)}
                    >
                      عرض أقل
                    </button>
                  </p>
                </>
              ) : (
                ''
              )}
            </div>
            <a href="tel:+966574857926" className="p-2 rounded-lg bg-main">
              {item.contact}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
