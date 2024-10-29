import React, {useState} from 'react'
import Header from '../Components/Header'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import Footer from '../Components/Footer';

const HealthProvider = () => {

  const [showPh, setShowPh] = useState(true);
  const [showAbuja, setShowAbuja] = useState(false);
  const [showLagos, setShowLagos] = useState(false);



  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;

    // Set showComponent1 and showComponent2 based on the selected option
    setShowPh(selectedValue === 'ph');
    setShowAbuja(selectedValue === 'abuja');
    setShowLagos(selectedValue === 'lagos');

  };





  const [ph, setPh] = useState(false);
  const [open, setOpen] = useState(true);

  const [ph1, setPh1] = useState(false);
  const [open1, setOpen1] = useState(true);

  const [ph2, setPh2] = useState(false);
  const [open2, setOpen2] = useState(true);

  const [ph3, setPh3] = useState(false);
  const [open3, setOpen3] = useState(true);


  const [ph4, setPh4] = useState(false);
  const [open4, setOpen4] = useState(true);



  const click = () => {
    setPh(true);
    setOpen(false);
  }

  const clickRev = () => {
    setPh(false);
    setOpen(true);
  }

  const click1 = () => {
    setPh1(true);
    setOpen1(false);
  }

  const clickRev1 = () => {
    setPh1(false);
    setOpen1(true);
  }

  const click2 = () => {
    setPh2(true);
    setOpen2(false);
  }

  const clickRev2 = () => {
    setPh2(false);
    setOpen2(true);
  }

  const click3 = () => {
    setPh3(true);
    setOpen3(false);
  }

  const clickRev3 = () => {
    setPh3(false);
    setOpen3(true);
  }

  const click4 = () => {
    setPh4(true);
    setOpen4(false);
  }

  const clickRev4 = () => {
    setPh4(false);
    setOpen4(true);
  }






  return (
    <div>
        <Header/>

        <div className="location">
            <select id="selectOption" onChange={handleSelectChange}>
                <option value="">Choose your location</option>
                <option value="ph">Port Harcourt</option>
                <option value="abuja">Abuja</option>
                <option value="lagos">Lagos</option>
            </select>


            <div className="providers">

                {
                    showPh ? (
                        <>

                            <h2>Hospitals In Port Harcourt </h2>


                           

                                <section className='prov-l'>
                                    <div className='p-l'>
                                        <div className='pin'>
                                            <span></span>

                                        </div>
                                        <h4>MaryLand Hospital</h4>

                                        <p>No. 2 Sani Abacha road, Port Harcourt</p>

                                    </div>
                                </section>

                          
                                <section className='prov-l'>
                                    <div className='p-l'>
                                        <div className='pin'>
                                            <span></span>

                                        </div>


                                        <h4>MaryLand Hospital</h4>

                                        <p>No. 2 Sani Abacha road, Port Harcourt</p>

                                    </div>
                                </section>



                                <section className='prov-l'>
                                    <div className='p-l'>
                                        <div className='pin'>
                                            <span></span>

                                        </div>

                                        <h4>MaryLand Hospital</h4>

                                        <p>No. 2 Sani Abacha road, Port Harcourt</p>

                                    </div>
                                </section>


                                <section className='prov-l'>
                                    <div className='p-l'>
                                        <div className='pin'>
                                            <span></span>
                                        </div>

                                        <h4>MaryLand Hospital</h4>

                                        <p>No. 2 Sani Abacha road, Port Harcourt</p>        

                                    </div>
                                </section>


                                <section className='prov-l'>
                                    <div className='p-l'>
                                        <div className='pin'>
                                            <span></span>

                                            
                                        </div>
                                        <h4>MaryLand Hospital</h4>

                                        <p>No. 2 Sani Abacha road, Port Harcourt</p>    

                                    </div>
                                </section>


                                <section className='prov-l'>
                                    <div className='p-l'>
                                        <div className='pin'>
                                            <span></span>

                                            
                                        </div>

                                        <h4>MaryLand Hospital</h4>

                                        <p>No. 2 Sani Abacha road, Port Harcourt</p>

                                    </div>
                                </section>

                        </>
                    ): null
                }        

                {
                    showLagos ? (
                        <>
                            <h2>Hospitals In Lagos </h2>


                                <section className='prov-l'>
                                    <div className='p-l'>
                                        <div className='pin'>
                                            <span></span>
                                        </div>

                                            <h4>Faith Clinic </h4>

                                            <p>No. 5 Oshodi road, Lagos</p>

                                        
                                    </div>
                                </section>



                                <section className='prov-l'>
                                    <div className='p-l'>
                                        <div className='pin'>
                                            <span></span>
                                        </div>

                                            <h4>Faith Clinic </h4>

                                            <p>No. 5 Oshodi road, Lagos</p>

                                    </div>
                                </section>



                                <section className='prov-l'>
                                    <div className='p-l'>
                                        <div className='pin'>
                                            <span></span>
                                        </div>

                                            <h4>Faith Clinic </h4>

                                            <p>No. 5 Oshodi road, Lagos</p>

                                    </div>
                                </section>




                                <section className='prov-l'>
                                    <div className='p-l'>
                                        <div className='pin'>
                                            <span></span>
                                        </div>

                                            <h4>Faith Clinic </h4>

                                            <p>No. 5 Oshodi road, Lagos</p>

                                    </div>
                                </section>


                                <section className='prov-l'>
                                    <div className='p-l'>
                                        <div className='pin'>
                                            <span></span>
                                        </div>

                                            <h4>Faith Clinic </h4>

                                            <p>No. 5 Oshodi road, Lagos</p>

                                    </div>
                                </section>


                                <section className='prov-l'>
                                    <div className='p-l'>
                                        <div className='pin'>
                                            <span></span>
                                        </div>

                                            <h4>Faith Clinic </h4>

                                            <p>No. 5 Oshodi road, Lagos</p>

                                    </div>
                                </section>
                        </>
                    ): null
                }



{
                    showAbuja ? (
                        <>
                            <h2>Hospitals In Abuja </h2>


                            <section className='prov-l'>
                                    <div className='p-l'>
                                        <div className='pin'>
                                            <span></span>
                                        </div>

                                            <h4>Thermal Hospital</h4>

                                            <p>#12 Faith street, Abuja</p>

                                        
                                    </div>
                                </section>



                                <section className='prov-l'>
                                    <div className='p-l'>
                                        <div className='pin'>
                                            <span></span>
                                        </div>

                                            <h4>Thermal Hospital</h4>

                                            <p>#12 Faith street, Abuja</p>

                                        
                                    </div>
                                </section>



                                <section className='prov-l'>
                                    <div className='p-l'>
                                        <div className='pin'>
                                            <span></span>
                                        </div>

                                            <h4>Thermal Hospital</h4>

                                            <p>#12 Faith street, Abuja</p>

                                        
                                    </div>
                                </section>




                                <section className='prov-l'>
                                    <div className='p-l'>
                                        <div className='pin'>
                                            <span></span>
                                        </div>

                                            <h4>Thermal Hospital</h4>

                                            <p>#12 Faith street, Abuja</p>

                                        
                                    </div>
                                </section>


                                <section className='prov-l'>
                                    <div className='p-l'>
                                        <div className='pin'>
                                            <span></span>
                                        </div>

                                            <h4>Thermal Hospital</h4>

                                            <p>#12 Faith street, Abuja</p>

                                        
                                    </div>
                                </section>

                                <section className='prov-l'>
                                    <div className='p-l'>
                                        <div className='pin'>
                                            <span></span>
                                        </div>

                                            <h4>Thermal Hospital</h4>

                                            <p>#12 Faith street, Abuja</p>

                                        
                                    </div>
                                </section>
                        </>
                    ): null
                }




            </div>


            

        </div>


        <Footer/>
    </div>
  )
}

export default HealthProvider