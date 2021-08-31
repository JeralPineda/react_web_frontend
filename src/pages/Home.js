import React from 'react';
import MainBanner from 'components/Web/MainBanner';
import HomeCourses from 'components/Web/HomeCourses';
import HowMyCoursesWork from 'components/Web/HowMyCoursesWork';
import ReviewsCourses from 'components/Web/ReviewsCourses';

const Home = () => {
   return (
      <>
         <MainBanner />
         <HomeCourses />
         <HowMyCoursesWork />
         <ReviewsCourses />
      </>
   );
};

export default Home;
