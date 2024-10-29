import React, { useState } from 'react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css/effect-fade';
import 'swiper/swiper.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectFade } from 'swiper';
import 'swiper/css/effect-fade';
import s1 from '../Assets/sme.jpeg'
import s2 from '../Assets/istockphoto-1365601848-612x612.jpg'
import s3 from '../Assets/corporate.png'
import s4 from '../Assets/family-of-four-sitting-happily-on-the-couch-together.jpg'
import  Typewriter  from 'typewriter-effect';
import { Link } from 'react-router-dom';

import { useSpring, animated } from 'react-spring';


const Slider = () => {

  

  const [flip, setFlip] = useState(false)

  const props = useSpring({
    to: {opacity:1},
    from: {opacity:0},
    reset:true,
    reverse:flip,
    delay:200,
    onRest: () => setFlip(!flip),
  })
  return (
    <div className='slide'>

    <section className='hero-slider' style={{backgroundColor: '#F8FCFF'}}>


      <div className='slide-l'>

        <h1>At AlliedHealth, <br /> 
        <span style={{color:'#dd8c3a'}}>
        <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      strings:[
                        "We Cater to the Healthcare Needs of Students and Young Adults.",
                        "We Provide Healthcare Solutions for SMEs",
                        "We Deliver Healthcare Services Tailored for Families of All Sizes.",
                        "We Offer Services for Corporate",
                      ],
                  }}
                  />
        </span>
        
        </h1>
        <button><Link to='/contact'>Get Started</Link></button>

      </div>

      <div className='slide-r'>


          <Swiper
          // install Swiper modules
          // modules={[EffectFade]} effect="fade"
          className='swipe'
          navigation={false}
          modules={[Autoplay, Scrollbar, A11y, EffectFade]}
          effect={"fade"}
          loop

          spaceBetween={20}
          slidesPerView={1}

          autoplay={{
            delay: 9000,
            disableOnInteraction: false,
          }}
          style={{ zIndex: 0}}
          
        >
            <SwiperSlide className='s-c'>
              
                  <img src={s2} alt="" />

            </SwiperSlide>


            <SwiperSlide>
              
                  <img src={s1} alt="" />

            </SwiperSlide>

            <SwiperSlide>
              
                  <img src={s4} alt="" />

            </SwiperSlide>

            <SwiperSlide>
              
                  <img src={s3} alt="" />

            </SwiperSlide>

            

            </Swiper>

          </div>


          </section>


          {/* <SwiperSlide>

          <section className='hero-slider' style={{backgroundColor: '#F8FCFF'}}>

            <div className='slide-l'>

              <h1>At AlliedHealth Insurance, we offer services<br /> <span style={{color:'#18bc2b'}}>For Family</span></h1>
              <button>Get Started</button>

            </div>

            <div className='slide-r'>
                <img src={s1} alt="" />
            </div>

          </section>

          

          </SwiperSlide>


          <SwiperSlide>

          <section className='hero-slider' style={{backgroundColor: '#F8FCFF'}}>

            <div className='slide-l'>

              <h1>At AlliedHealth Insurance, we offer services<br /> <span style={{color:'#e33e3c'}}>For SMEs</span></h1>
              <button>Get Started</button>

            </div>

            <div className='slide-r'>
                <img src={s4} alt="" />
            </div>

          </section>

          

          </SwiperSlide>



          <SwiperSlide style={{display:'flex'}}>

          <section className='hero-slider' style={{backgroundColor: '#F8FCFF'}}>

            <div className='slide-l'>

              <h1>At AlliedHealth Insurance, we offer services<br /> <span style={{color:'#838383'}}>For Corporate</span></h1>
              <button>Get Started</button>

            </div>

            <div className='slide-r'>
                <img src={s3} alt="" />
            </div>

          </section>

          

          </SwiperSlide> */}

        
       
        
      


      {/* <animated.div style={props}>
          <p>hi</p>
          
          
      </animated.div> */}

      
    </div>
  )
}

export default Slider