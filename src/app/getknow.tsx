"use client";
import 'daisyui/dist/full.css';
import 'tailwindcss/tailwind.css';
import { LayoutGridDemo } from './layoutGridPic';

const GetKnow = () => {
  return (
    <div id='getknow' className='md:mt-60 mt-20'>
      <div className="flex justify-center items-center">
        <img src="/images/texts/get to know.png" alt="get to know" className='md:w-96 md:ml-3 w-64' />
      </div>
      <div className="h-full md:-mt-16 -mt-24 md:mb-52">
        <LayoutGridDemo />
      </div>
    </div>
  );
}

export default GetKnow;