import React from 'react';
import Info from './Info';
import Services from './Services';
import MoreInfo from './MoreInfo';
import Location from './Location';
import OurWorks from './OurWorks';
import Contact from './Contact';

function Home() {
  return (
    <>
      <Info />
      <MoreInfo />
      <Services />
      <OurWorks />
      <Location />
      <Contact />
    </>
  );
}

export default Home;
