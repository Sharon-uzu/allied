import React from 'react'
import us from '../Assets/hero-sldArtboard-2.jpeg'
import Header from '../Components/Header';
import { FaPersonBurst } from "react-icons/fa6";
import { MdFamilyRestroom } from "react-icons/md";
import { MdCorporateFare } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa";
import { FaHeartPulse } from "react-icons/fa6";



import { FaHandHoldingHeart } from "react-icons/fa";
import { FaScaleBalanced } from "react-icons/fa6";
import { IoRibbonSharp } from "react-icons/io5";
import { FaPeopleRoof } from "react-icons/fa6";
import { FaHandFist } from "react-icons/fa6";
import Footer from '../Components/Footer';
import Faq from '../Components/Faq';





const AboutUs = () => {
  return (
    <div className='about-us'>

        <Header/>

        <div className="about">

            <div className="abt-l">
                <h5>ABOUT US</h5>
                <h1>We offer health plans suitable for individuals and families.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet molestiae mollitia modi asperiores laboriosam accusamus sed voluptate animi ut perferendis! Vero laboriosam dignissimos laborum distinctio voluptatem doloribus iusto atque asperiores!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam et reprehenderit temporibus velit ab officia ut earum! Quod obcaecati maxime omnis? Dicta vitae, a quod ea odio adipisci sapiente culpa?

                </p>
            </div>

            <div className="abt-r">

                <img src={us} alt="" />

                <section className='abt-cards'>

                    <div>

                        <h2>3.5</h2>
                        <h6>Years of Experience</h6>

                    </div>

                    <div>

                        <h2>23</h2>
                        <h6>Projects</h6>

                    </div>

                    <div>
                        <h2>100+</h2>
                        <h6>Positive Reviews</h6>
                    </div>

                    <div>
                        <h2>200+</h2>
                        <h6>Participants</h6>
                    </div>

                </section>

            </div>

        </div>

        <section className="serv">

            <h3>People We Offer Services To.</h3>

            <div className='offers'>

                <div>
                    <FaPersonBurst  className='a-icon'/>
                    <h6>Individuals</h6>

                </div>

                <div>
                    <MdFamilyRestroom  className='a-icon'/>
                    <h6>Family</h6>

                </div>

                <div>
                    <FaBusinessTime  className='a-icon'/>
                    <h6>SMEs</h6>

                </div>

                <div>
                    <MdCorporateFare  className='a-icon'/>
                    <h6>Corporates</h6>

                </div>

            </div>

        </section>



        <section className='health'>

            <h2>Core Values</h2>

            <div className='benefits'>
                <div>
                    <FaHandHoldingHeart className='p-icon'/>
                    <h3>Empathy</h3>
                    <p>Demonstrating genuine care and understanding for patients' physical and emotional well-being.</p>
                </div>

                <div>
                    <FaHandFist className='p-icon'/>
                    <h3>Integrity</h3>
                    <p>Maintaining honesty, transparency, and ethical conduct in all professional interactions, fostering trust with patients and colleagues.</p>
                </div>

                <div>
                    <FaPeopleRoof className='p-icon'/>
                    <h3>Collaboration</h3>
                    <p>Working seamlessly with multidisciplinary teams, recognizing the importance of collective expertise in providing comprehensive healthcare.</p>
                </div>

                <div>
                    <IoRibbonSharp className='p-icon'/>
                    <h3>Professionalism</h3>
                    <p>Adhering to high standards of competence, continuous learning, and upholding the dignity and respect of patients and colleagues.</p>
                </div>

                <div>
                    <FaHeartPulse className='p-icon'/>
                    <h3>Patient-Centered Care</h3>
                    <p>Prioritizing the individual needs and preferences of patients, involving them in decision-making processes, and tailoring services to promote the best possible outcomes.</p>
                </div>

                <div>
                    <FaScaleBalanced className='p-icon'/>
                    <h3>Advocacy for Health Equity</h3>
                    <p>Championing fairness and inclusivity in healthcare, addressing disparities, and striving to ensure equal access to quality services for all individuals.</p>
                </div>

            </div>

        </section>

        <Faq/>

        <Footer/>
        
    </div>
  )
}

export default AboutUs