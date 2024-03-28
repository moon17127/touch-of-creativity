import React from 'react';
import { MdPhoneInTalk } from 'react-icons/md';
import { MdLocationPin } from 'react-icons/md';
const Contact = () => {
  return (
    <div className="flex justify-end p-8 py-12 mt-8 bg-slate-200 xl:container xl:mx-auto">
      <div className="flex flex-col text-left ">
        <h3 className="mb-6 font-bold">Contacts</h3>

        <div className="flex items-center justify-end gap-2 my-2 ml-2 ">
          <a href="tel:+966574857926">966 57 485 7926+</a>
          <MdPhoneInTalk className="text-2xl text-green-500" />
        </div>
        <div className="flex items-center gap-2 my-2 ml-2 ">
          <p>
            District, Prince Turki Street, Al-Yarmouk, Al-Khobar 34424, Kingdom
            of Saudi Arabia{' '}
          </p>
          <div>
            <MdLocationPin className="text-2xl text-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
