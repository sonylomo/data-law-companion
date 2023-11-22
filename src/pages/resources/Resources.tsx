import React from 'react'
import CaseStudies from './sections/CaseStudies';
import Blog from './sections/Blog';
import News from './sections/News';

const Resources = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      {/* <h1 className="uppercase text-2xl sm:text-3xl font-semibold">RESOURCES LIBRARY</h1> */}

      <News/>
      <CaseStudies/>
      <Blog/>
    </div>
  )
}

export default Resources