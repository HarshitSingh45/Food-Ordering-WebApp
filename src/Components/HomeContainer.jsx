import React from 'react'
import Delivery from '../img/delivery.png'
import HeroBg from '../img/heroBg.png'
import { HeroData } from '../utils/data'



export default function HomeContainer() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-auto md:h-screen' id='home'>
      <div className='py-2 flex flex-col items-start md:items-start justify-  flex-1 gap-6'>
        <div className='flex items-center gap-2 justify-center bg-orange-100 px-2 py-1 rounded-full'>
          <p className='text-base text-orange-500 font-semibold'>
            Bike Delivery
          </p>
          <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
            <img 
              src={Delivery} 
              className='w-full h-full object-contain' 
              alt="bikepic" />
          </div>
        </div> 
        <p className='text-[2.5rem] lg:text-[4.25rem] font-bold tracking-wide text-headingColor'>
          The fastest delivery in &nbsp;
          <span className='text-orange-600 text-[3rem] lg:text-[5rem]' >Your City</span>
        </p>
        <p className='text-textColor text-base text-center md:text-left md:w-[80%]'>
        A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.
        </p>

        <button 
          type='button'
          className='bg-gradient-to-br from-orange-400 to to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out'>
            Order Now
          </button>
      </div>
      <div className='py-2 flex-1 flex items-center relative'>
        <img src={HeroBg} 
             alt="herobgpic" 
             className='ml-auto h-420 w-full lg:w-auto lg:h-650' 
        />
        <div className='w-full h-full top-0 left-0 lg:px-32 py-4 flex items-center justify-center absolute gap-4 flex-wrap'>
            {
                HeroData && HeroData.map(n => (
                  // min-w-[190px]
                    <div 
                        key={n.id} 
                        className='lg:w-190  p-4 bg-cardOverlay backdrop-blur-md 
                        rounded-3xl flex flex-col items-center justify-center drop-shadow-lg'>
                        <img 
                            src={n.src} 
                            className='lg:w-40 w-20 -mt-10 lg:-mt-20' 
                            alt="chocolate_img" 
                        />
                        <p className='text-base lg:text-xl  font-semibold text-textColor mt-2 lg:mt-4'>
                            {n.name}
                        </p>
                        <p className='text-[12px] lg:text-sm text-gray-4 00 font-semibold my-1 lg:my-3'>
                            {n.desc}
                        </p>
                        <p className='text-sm font-semibold text-headingColor'>
                            <span className='text-xs text-red-500'>Rs.</span> 
                            {n.price}
                        </p>
                    </div>
                ))
            }
        </div>
      </div>
    </section>
  )
}
