import React from 'react'
import {FaCalendarCheck, FaHeartbeat, FaCreditCard} from 'react-icons/fa'




const How = () => {
  return (
    <section className='health'>

            <h2>How It Works</h2>

            <div className='benefits'>
                <div>
                    <FaCalendarCheck className='p-icon'/>
                    <h3>Preferred plan</h3>
                    <p>Choose between the  payment period and select any health insurance plans that suits you.</p>
                </div>

                <div>
                    <FaCreditCard className='p-icon'/>
                    <h3>Pay online</h3>
                    <p>Enter your details and pay online with your card. It’s very simple</p>
                </div>

                <div>
                    <FaHeartbeat className='p-icon'/>
                    <h3>Access care!</h3>
                    <p>Watch out for the series of emails you’ll get from your no. 1 HMO in Nigeria.</p>
                </div>

            </div>

        </section>
  )
}

export default How