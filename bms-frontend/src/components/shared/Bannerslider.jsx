import React from 'react'
import { banners } from '../../utils/constants'
import Slider from 'react-slick';

const Bannerslider = () => {

    const settings = {
        centerMode: true,
        centerPadding: '400px', // side preview space
        slidesToShow: 1,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrow: true,
    }

  return (
    <div className='w-full bg-white py-6'>
        <div className="mx-auto px-4">
            <Slider {...settings}>
                {
                    banners.map((banner, i) => (
                        <div key={i} className='px-2'>
                            <img src={banner} alt={`banner-${banner.id}`}
                            className='w-full h-[300px] rounded-xl object-cover' />
                        </div>
                    ))
                }
            </Slider>
        </div>
      
    </div>
  )
}

export default Bannerslider
