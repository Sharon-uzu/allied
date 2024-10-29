import React from 'react';
import {FaFacebook, FaTwitter, FaYoutube} from 'react-icons/fa'
import m from '../Assets/image-cheerful-young-african-man-standing-posing-yellow-background-with-thumbs-up-1.png'
import phone from '../Assets/White-Phone-Mascot-A-Pose.H03-1.png'
import store from '../Assets/image-18.png'
import google from '../Assets/image-19.png'

const Media = () => {
  return (
    <div className='media'>
        <h4>Follow us on Social media</h4>
        <p>Stay Connected: Join Our Social Media Community Today</p>

        <div className='media-icons'>

            <a href=""><FaFacebook className='media-f'/></a>
            <a href=""><FaTwitter className='media-f'/></a>
            <a href=""><FaYoutube className='media-f'/></a>

        </div>

        <div className="media-card">

            <div className="card-m">
                <div>
                    <h2>Refer & Earn</h2>
                    <p>Earn 5% in rewards with each customer you refer</p>
                    <a href="">LEARN MORE</a>
                </div>

                <div className='m-img'>
                    <img src={m} alt="" />
                </div>
            </div>

            <div className="card-m card1">
                <div>
                    <h2>Download our App</h2>
                    <p>Seamless Access: Get Our App for an Enhanced Experience</p>
                    <div className='dl'>
                        <img src={google} alt="" />
                        <img src={store} alt="" style={{marginTop:'1.5px'}}/>
                        
                    </div>
                </div>

                <div className='m-img'>
                    <img src={phone} alt="" />
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default Media