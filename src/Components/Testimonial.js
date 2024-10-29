import React from 'react';
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
import t1 from '../Assets/hero-sldArtboard-2.jpeg'




const Testimonial = () => {
  return (
    <div className='test'>

        <div className="testimonial">

            <h2>People love to talk about us</h2>

            <Swiper
            // install Swiper modules
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={
                480<={
                    slidesPerView:1,
                }
                
            }

            pagination={{ clickable: true }}
            // navigation={true}
            autoplay={{
            delay: 6000,
            disableOnInteraction: false,
            }}
            style={{ zIndex: 1 }}
            >
            <SwiperSlide>
            <section className='test-c'>

                <img src={t1} alt="" />

                <div className='t-c'>

                    <p>"AlliedHealth made healthcare simple! With just a few clicks, I found a plan that fit my budget. The app helped me locate a nearby provider effortlessly. Being part of their community feels like having a supportive health family."</p>
                    <h5>- Sarah M.</h5>

                </div>

                

            </section>

            </SwiperSlide>


            <SwiperSlide>
            <section className='test-c'>

                <img src={t1} alt="" />

                <div className='t-c'>
                    <p>"Choosing AlliedHealth was the best decision. Their platform helped me find affordable healthcare options for my small business. The network of providers is extensive, and the community aspect adds a personal touch."</p>

                    <h5>John D.</h5>

                </div>

                

            </section>

            </SwiperSlide>


            <SwiperSlide>
                <section className='test-c'>

                    <img src={t1} alt="" />

                    <div className='t-c'>

                        <p>"As a busy student, AlliedHealth has been a lifesaver! I easily selected a plan that covered my needs and found a provider close to campus. Being part of their community gives me peace of mind."</p>
                        <h5>Emily S.</h5>

                    </div>

                    

                </section>
            </SwiperSlide>


            <SwiperSlide>
                <section className='test-c'>

                    <img src={t1} alt="" />

                    <div className='t-c'>

                        <p>"AlliedHealth is a game-changer! Their platform simplified healthcare for my family. We quickly found a plan that suited us and discovered a nearby provider. The supportive community aspect is a bonus!"</p>
                        <h5>Michael L.</h5>

                    </div>

                    

                </section>
            </SwiperSlide>


            <SwiperSlide>
                <section className='test-c'>

                    <img src={t1} alt="" />

                    <div className='t-c'>

                        <p>"AlliedHealth exceeded my expectations! I found a plan tailored to my needs and located a provider in my area within minutes. Being part of their community makes me feel supported in my health journey."</p>
                        <h5>Lisa R.</h5>

                    </div>

                    

                </section>

            </SwiperSlide>


        </Swiper>

        </div>

        

        
    </div>
  )
}

export default Testimonial