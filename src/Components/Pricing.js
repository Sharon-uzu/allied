import React, {useState} from 'react'
import Modal from "react-modal";


const Pricing = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  function openModal(){
    setIsModalOpen(true)
  }


    const [list1, setList1] = useState(true)
    const [list2, setList2] = useState(false)
    const [list3, setList3] = useState(false)

    function month(){
        setList1(true)
        setList2(false)
        setList3(false)
    }

    function quarter(){
        setList2(true)
        setList3(false)
        setList1(false)
    }

    function year(){
        setList3(true)
        setList2(false)
        setList1(false)
    }

  return (
    <div className='pricing'>
        <h2>Plans and Pricing</h2>

        <p>Select any comfortable payment plan that works for you. You can buy as many plans as you want. Please note that subsequent payments will be debited automatically from your card.</p>

        <div className='price-plan'>
            <span onClick={month} className={` ${list1 ? 'active' : 'inactive'}`}>Monthly</span>
            <span onClick={quarter} className={` ${list2 ? 'active' : 'inactive'}`}>Quarterly</span>
            <span onClick={year} className={` ${list3 ? 'active' : 'inactive'}`}>Annually</span>
        </div>


        {list1 ? (

        <div className="lists l1">

            <section>       
                <div className='g price-l'>
                    <div className='price-form'>
                        <h3>ALLIED GOLD</h3>
                        <h1>₦3,500  <span>per person</span></h1>
                        <input type="text" placeholder='How many persons'/>
                        <button type="submit" onClick={openModal}>Buy</button>
                        <p>Combined medical cover of <b>₦1.2 Million</b>per year</p>
                        <p><b>₦150,000 </b>limit for surgeries available per year*</p>
                        <p>Unlimited chats and phone calls with medical doctors</p>
                        <p>Free drug pick-ups from the nearest pharmacy to your home</p>
                        <p>Roam across <b>1198 </b>tier 4 hospitals</p>
                        <p>Pay zero naira for hospital registration fees</p>
                        <p><b>3</b>sessions with specialist doctors per year*</p>
                        <p><b>3</b>sessions with a pediatrician per year*</p>
                        <p>Immunization for children</p>
                        <p>Ambulance services - roadside to hospital*</p>
                        <p>Primary dental care*</p>
                        <p><b>₦</b>15,000 limit for eye care per year*</p>
                        <p>1 gym session weekly*</p>
                        <p>Hospital accommodation for — 20 days per year*</p>
                        <p>Hospital ward care – general ward*</p>
                        <p>Instant access to healthcare*</p>
                        <a href="">Click to view list of available hospitals</a>
                        <a href="">Click to view comprehensive benefit list</a>

                    </div>
                </div>

                <div className='s price-l'>
                    <div className='price-form'>
                        <h3>ALLIED SILVER</h3>
                        <h1>₦6,000 <span>per person</span></h1>
                        <input type="text" placeholder='How many persons'/>
                        <button type="submit" onClick={openModal}>Buy</button>
                        <p>Combined medical cover of <b>₦1.8 Million</b>per year</p>
                        <p><b>₦300,000 </b>limit for surgeries available per year*</p>
                        <p>Unlimited chats and phone calls with medical doctors</p>
                        <p>Free drug pick-ups from the nearest pharmacy to your home</p>
                        <p>Roam across <b>2083 </b>tier 4 hospitals</p>
                        <p>Pay zero naira for hospital registration fees</p>
                        <p><b>5</b>sessions with specialist doctors per year*</p>
                        <p><b>5</b>sessions with a pediatrician per year*</p>
                        <p>Immunization for children</p>
                        <p>Ambulance services - roadside to hospital*</p>
                        <p>Primary dental care*</p>
                        <p><b>₦</b>25,000 limit for eye care per year*</p>
                        <p>2 gym session weekly*</p>
                        <p>Hospital accommodation for — 30 days per year*</p>
                        <p>Hospital ward care – general ward*</p>
                        <p>Instant access to healthcare*</p>
                        <a href="">Click to view list of available hospitals</a>
                        <a href="">Click to view comprehensive benefit list</a>


                    </div>
                </div>

                <div className='p price-l'>
                    <div className='price-form'>
                        <h3>ALLIED PLATINUM</h3>
                        <h1>₦13,500  <span>per person</span></h1>
                        <input type="text" placeholder='How many persons'/>
                        <button type="submit" onClick={openModal}>Buy</button>
                        <p>Combined medical cover of <b>₦3 Million</b>per year</p>
                        <p><b>₦500,000 </b>limit for surgeries available per year*</p>
                        <p>Unlimited chats and phone calls with medical doctors</p>
                        <p>Free drug pick-ups from the nearest pharmacy to your home</p>
                        <p>Roam across <b>4000 </b>tier 4 hospitals</p>
                        <p>Pay zero naira for hospital registration fees</p>
                        <p><b>10</b>sessions with specialist doctors per year*</p>
                        <p><b>10</b>sessions with a pediatrician per year*</p>
                        <p>Immunization for children</p>
                        <p>Ambulance services - roadside to hospital*</p>
                        <p>Primary dental care*</p>
                        <p><b>₦</b>55,000 limit for eye care per year*</p>
                        <p>3 gym session weekly*</p>
                        <p>Hospital accommodation for — 45 days per year*</p>
                        <p>Hospital ward care – general ward*</p>
                        <p>Instant access to healthcare*</p>
                        <a href="">Click to view list of available hospitals</a>
                        <a href="">Click to view comprehensive benefit list</a>


                    </div>
                </div>
            </section>

        </div>) : null}

        {list2 ? (

        <div className="lists l2">

            <section>
                <div className='g price-l'>
                    <div className='price-form'>
                        <h3>ALLIED GOLD</h3>
                        <h1>₦10,500  <span>per person</span></h1>
                        <input type="text" placeholder='How many persons'/>
                        <button type="submit" onClick={openModal}>Buy</button>
                        <p>Combined medical cover of <b>₦1.2 Million</b>per year</p>
                        <p><b>₦150,000 </b>limit for surgeries available per year*</p>
                        <p>Unlimited chats and phone calls with medical doctors</p>
                        <p>Free drug pick-ups from the nearest pharmacy to your home</p>
                        <p>Roam across <b>1198 </b>tier 4 hospitals</p>
                        <p>Pay zero naira for hospital registration fees</p>
                        <p><b>3</b>sessions with specialist doctors per year*</p>
                        <p><b>3</b>sessions with a pediatrician per year*</p>
                        <p>Immunization for children</p>
                        <p>Ambulance services - roadside to hospital*</p>
                        <p>Primary dental care*</p>
                        <p><b>₦</b>15,000 limit for eye care per year*</p>
                        <p>1 gym session weekly*</p>
                        <p>Hospital accommodation for — 20 days per year*</p>
                        <p>Hospital ward care – general ward*</p>
                        <p>Instant access to healthcare*</p>
                        <a href="">Click to view list of available hospitals</a>
                        <a href="">Click to view comprehensive benefit list</a>

                    </div>
                </div>

                <div className='s price-l'>
                    <div className='price-form'>
                        <h3>ALLIED SILVER</h3>
                        <h1>₦18,000 <span>per person</span></h1>
                        <input type="text" placeholder='How many persons'/>
                        <button type="submit" onClick={openModal}>Buy</button>
                        <p>Combined medical cover of <b>₦1.8 Million</b>per year</p>
                        <p><b>₦300,000 </b>limit for surgeries available per year*</p>
                        <p>Unlimited chats and phone calls with medical doctors</p>
                        <p>Free drug pick-ups from the nearest pharmacy to your home</p>
                        <p>Roam across <b>2083 </b>tier 4 hospitals</p>
                        <p>Pay zero naira for hospital registration fees</p>
                        <p><b>5</b>sessions with specialist doctors per year*</p>
                        <p><b>5</b>sessions with a pediatrician per year*</p>
                        <p>Immunization for children</p>
                        <p>Ambulance services - roadside to hospital*</p>
                        <p>Primary dental care*</p>
                        <p><b>₦</b>25,000 limit for eye care per year*</p>
                        <p>2 gym session weekly*</p>
                        <p>Hospital accommodation for — 30 days per year*</p>
                        <p>Hospital ward care – general ward*</p>
                        <p>Instant access to healthcare*</p>
                        <a href="">Click to view list of available hospitals</a>
                        <a href="">Click to view comprehensive benefit list</a>


                    </div>
                </div>

                <div className='p price-l'>
                    <div className='price-form'>
                        <h3>ALLIED PLATINUM</h3>
                        <h1>₦40,500  <span>per person</span></h1>
                        <input type="text" placeholder='How many persons'/>
                        <button type="submit" onClick={openModal}>Buy</button>
                        <p>Combined medical cover of <b>₦3 Million</b>per year</p>
                        <p><b>₦500,000 </b>limit for surgeries available per year*</p>
                        <p>Unlimited chats and phone calls with medical doctors</p>
                        <p>Free drug pick-ups from the nearest pharmacy to your home</p>
                        <p>Roam across <b>4000 </b>tier 4 hospitals</p>
                        <p>Pay zero naira for hospital registration fees</p>
                        <p><b>10</b>sessions with specialist doctors per year*</p>
                        <p><b>10</b>sessions with a pediatrician per year*</p>
                        <p>Immunization for children</p>
                        <p>Ambulance services - roadside to hospital*</p>
                        <p>Primary dental care*</p>
                        <p><b>₦</b>55,000 limit for eye care per year*</p>
                        <p>3 gym session weekly*</p>
                        <p>Hospital accommodation for — 45 days per year*</p>
                        <p>Hospital ward care – general ward*</p>
                        <p>Instant access to healthcare*</p>
                        <a href="">Click to view list of available hospitals</a>
                        <a href="">Click to view comprehensive benefit list</a>


                    </div>
                </div>
            </section>

        </div>) : null}


        {list3 ? (

        <div className="lists l3">


            <section>
                <div className='g price-l'>
                    <div className='price-form'>
                        <h3>ALLIED GOLD</h3>
                        <h1>₦10,500  <span>per person</span></h1>
                        <input type="text" placeholder='How many persons'/>
                        <button type="submit" onClick={openModal}>Buy</button>
                        <p>Combined medical cover of <b>₦1.2 Million</b>per year</p>
                        <p><b>₦150,000 </b>limit for surgeries available per year*</p>
                        <p>Unlimited chats and phone calls with medical doctors</p>
                        <p>Free drug pick-ups from the nearest pharmacy to your home</p>
                        <p>Roam across <b>1198 </b>tier 4 hospitals</p>
                        <p>Pay zero naira for hospital registration fees</p>
                        <p><b>3</b>sessions with specialist doctors per year*</p>
                        <p><b>3</b>sessions with a pediatrician per year*</p>
                        <p>Immunization for children</p>
                        <p>Ambulance services - roadside to hospital*</p>
                        <p>Primary dental care*</p>
                        <p><b>₦</b>15,000 limit for eye care per year*</p>
                        <p>1 gym session weekly*</p>
                        <p>Hospital accommodation for — 20 days per year*</p>
                        <p>Hospital ward care – general ward*</p>
                        <p>Instant access to healthcare*</p>
                        <a href="">Click to view list of available hospitals</a>
                        <a href="">Click to view comprehensive benefit list</a>

                    </div>
                </div>

                <div className='s price-l'>
                    <div className='price-form'>
                        <h3>ALLIED SILVER</h3>
                        <h1>₦66,000 <span>per person</span></h1>
                        <input type="text" placeholder='How many persons'/>
                        <button type="submit" onClick={openModal}>Buy</button>
                        <p>Combined medical cover of <b>₦1.8 Million</b>per year</p>
                        <p><b>₦300,000 </b>limit for surgeries available per year*</p>
                        <p>Unlimited chats and phone calls with medical doctors</p>
                        <p>Free drug pick-ups from the nearest pharmacy to your home</p>
                        <p>Roam across <b>2083 </b>tier 4 hospitals</p>
                        <p>Pay zero naira for hospital registration fees</p>
                        <p><b>5</b>sessions with specialist doctors per year*</p>
                        <p><b>5</b>sessions with a pediatrician per year*</p>
                        <p>Immunization for children</p>
                        <p>Ambulance services - roadside to hospital*</p>
                        <p>Primary dental care*</p>
                        <p><b>₦</b>25,000 limit for eye care per year*</p>
                        <p>2 gym session weekly*</p>
                        <p>Hospital accommodation for — 30 days per year*</p>
                        <p>Hospital ward care – general ward*</p>
                        <p>Instant access to healthcare*</p>
                        <a href="">Click to view list of available hospitals</a>
                        <a href="">Click to view comprehensive benefit list</a>


                    </div>
                </div>

                <div className='p price-l'>
                    <div className='price-form'>
                        <h3>ALLIED PLATINUM</h3>
                        <h1>₦148,500  <span>per person</span></h1>
                        <input type="text" placeholder='How many persons'/>
                        <button type="submit" onClick={openModal}>Buy</button>
                        <p>Combined medical cover of <b>₦3 Million</b>per year</p>
                        <p><b>₦500,000 </b>limit for surgeries available per year*</p>
                        <p>Unlimited chats and phone calls with medical doctors</p>
                        <p>Free drug pick-ups from the nearest pharmacy to your home</p>
                        <p>Roam across <b>4000 </b>tier 4 hospitals</p>
                        <p>Pay zero naira for hospital registration fees</p>
                        <p><b>10</b>sessions with specialist doctors per year*</p>
                        <p><b>10</b>sessions with a pediatrician per year*</p>
                        <p>Immunization for children</p>
                        <p>Ambulance services - roadside to hospital*</p>
                        <p>Primary dental care*</p>
                        <p><b>₦</b>55,000 limit for eye care per year*</p>
                        <p>3 gym session weekly*</p>
                        <p>Hospital accommodation for — 45 days per year*</p>
                        <p>Hospital ward care – general ward*</p>
                        <p>Instant access to healthcare*</p>
                        <a href="">Click to view list of available hospitals</a>
                        <a href="">Click to view comprehensive benefit list</a>


                    </div>
                </div>
            </section>

        </div>) : null}




        <Modal
            isOpen={isModalOpen}
            onRequestClose={toggleModal}
            contentLabel="Example Modal"
            className={`bg-transparnt`}
            style={{ 
              overlay: {
                position: "fixed",
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center',
                top: "0",
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "hsla(0, 0%, 0%, .8)",
                zIndex:100000,
                
              },
            }}
          >
           
              
                <form className='m-form'>

                    <h3>HOLD ON!! The Plans will be launched soon.</h3>
                    <h1>Be the first to know when we launch.</h1>


                    <div>
                        <input type="email" name="" id="" placeholder='Email'/>
                        <button type="submit">Send</button>
                    </div>


                </form>

              

           
            
          </Modal>




    </div>
  )
}

export default Pricing