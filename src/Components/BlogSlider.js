import React from 'react'
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import s1 from '../Assets/ECZEMA-VS-HYGIENE.webp'
import s2 from '../Assets/amenorrhea.jpeg'
import s3 from '../Assets/espresso-yourself-2.png'
import s4 from '../Assets/cpr-1.png'


const BlogSlider = () => {
  return (
    <div className='b-slide'>
        <Swiper
        // install Swiper modules
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={4}
       
        // pagination={{ clickable: true }}
        // navigation={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        style={{ zIndex: 1 }}
      >
        <SwiperSlide>
            <section className='blog-slider'>
                <img src={s1} alt="" />
                <h2>ECZEMA VS HYGIENE</h2>
                <a href="">Read more</a>

            </section>
         </SwiperSlide>

         <SwiperSlide>

            <section className='blog-slider'>
                <img src={s2} alt="" />
                <h2>LET'S TALK AMONORRHEA</h2>
                <a href="">Read more</a>

            </section>
         </SwiperSlide>

         <SwiperSlide>

            <section className='blog-slider'>
                <img src={s3} alt="" />
                <h2>ESPRESSO YOURSELF:BEYOUND THE BEAN</h2>
                <a href="">Read more</a>

            </section>
         </SwiperSlide>

         <SwiperSlide>

            <section className='blog-slider'>
                <img src={s4} alt="" />
                <h2>PERFORM CPR LIKE A PRO</h2>
                <a href="">Read more</a>

            </section>
         </SwiperSlide>

         <SwiperSlide>

            <section className='blog-slider'>
                <img src={s1} alt="" />
                <h2>ECZEMA VS HYGIENE</h2>
                <a href="">Read more</a>

            </section>
         </SwiperSlide>

         <SwiperSlide>

            <section className='blog-slider'>
                <img src={s2} alt="" />
                <h2>LET'S TALK AMONORRHEA</h2>
                <a href="">Read more</a>

            </section>

        </SwiperSlide>
        
        
      </Swiper>

    </div>
  )
}

export default BlogSlider