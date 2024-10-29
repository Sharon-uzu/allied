import React from 'react'
import { FaAddressBook, FaFacebook, FaTwitter, FaPhone, FaYoutube, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>

        <section className='footer-c'>

            <div className='f1'>
                <h4>OUR PRODUCTS</h4>
                <ul>
                    <li><a href="">Health</a></li>
                    <li><a href="">Investments</a></li>
                    <li><a href="">Life & Savings</a></li>
                    <li><a href="">Property & Casualty</a></li>
                </ul>
                
            </div>

            <div className='f1'>
                <h4>ALLIED & YOU</h4>

                <ul>
                    <li><a href="">Life & Living Blog</a></li>
                    <li><a href="">App Download</a></li>
                    <li><a href="">Self-Service</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Whistle Blowing</a></li>
                    <li><a href="">Compliance & Ethical Code</a></li>
                </ul>
                
            </div>

            <div className='f1'>
                <h4>USEFUL LINKS</h4>

                <ul>
                    <li><a href="">About Us</a></li>
                    <li><a href="">FAQs</a></li>
                    <li><a href="">Glossary</a></li>
                    <li><a href="">Financials</a></li>
                    <li><a href="">Download</a></li>
                    <li><a href="">Compliant</a></li>
                </ul>

            </div>

    
            

            <div className='f2'>
                <h4>FOLLOW US</h4>
                <div>

                    <FaFacebook className='f-icon'/>
                    <FaInstagram className='f-icon'/>
                    <FaTwitter className='f-icon'/>
                    <FaYoutube className='f-icon'/>
                    <FaLinkedin className='f-icon'/>

                </div>

            </div>

        </section>

    </div>
  )
}

export default Footer