import React, {useState} from 'react';
import v1 from '../Assets/icon-one.svg'
import v2 from '../Assets/icon-two.svg'
import v3 from '../Assets/icon-three.svg'
import Modal from "react-modal";



const View = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  function openModal(){
    setIsModalOpen(true)
  }

  return (
    <div className='view'>
        <div className="view-c">
            <div>
                <img src={v1} alt="" />
                <h5>Allied Gold Plan</h5>
                <button onClick={openModal}>VIEW </button>
            </div>

            <div>
                <img src={v2} alt="" />
                <h5>Allied Silver Plan</h5>
                <button onClick={openModal}> VIEW</button>
            </div>

            <div>
                <img src={v3} alt="" />
                <h5>Allide Platinum Plan</h5>
                <button onClick={openModal}>VIEW</button>
            </div>
        </div>



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

export default View