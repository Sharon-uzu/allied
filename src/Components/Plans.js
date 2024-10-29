import React from 'react'
import p1 from '../Assets/individual.jpeg'
import p2 from '../Assets/family-of-four-sitting-happily-on-the-couch-together.jpg'
import p3 from '../Assets/istockphoto-1365601848-612x612.jpg'
import p4 from '../Assets/elderly.jpeg'
import p5 from '../Assets/sme.jpeg'
import p6 from '../Assets/corporate.png'

const Plans = () => {
  return (
    <div className='plans'>
        <div className="plan1 plan-m">
            <h2>Choose from a wide variety of plans for you, your family & your Staff</h2>
            {/* <h3>We offer health plans suitable for individuals and families. We also provide access to healthcare for employees at small and medium-sized businesses or SMEs.</h3> */}
        </div>

        <div className="plan2">
            <div className='plan-c'>
                
                <img src={p1} alt="" />
                <div>
                    <h6>Individual</h6>
                </div>
            </div>

            <div className='plan-c'>
                
                <img src={p2} alt="" />
                <div>
                    <h6>Family</h6>
                </div>
            </div>

            <div className='plan-c'>
                
                <img src={p3} alt="" />
                <div>
                    <h6>Undergraduates</h6>
                </div>
            </div>

            <div className='plan-c'>
                
                <img src={p4} alt="" />
                <div>
                    <h6>Senior Citizens</h6>
                </div>
            </div>

            <div className='plan-c'>
                
                <img src={p5} alt="" />
                <div>
                    <h6>SMEs</h6>
                </div>
            </div>


            <div className='plan-c'>
                
                <img src={p6} alt="" />
                <div>
                    <h6>Corporate</h6>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Plans