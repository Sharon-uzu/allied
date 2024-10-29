import React, {useState} from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const Faq = () => {

    const [ans, setAns] = useState(false);
  const [open, setOpen] = useState(true);

  const [ans1, setAns1] = useState(false);
  const [open1, setOpen1] = useState(true);

  const [ans2, setAns2] = useState(false);
  const [open2, setOpen2] = useState(true);

  const [ans3, setAns3] = useState(false);
  const [open3, setOpen3] = useState(true);

  const [ans4, setAns4] = useState(false);
  const [open4, setOpen4] = useState(true);

  const [ans5, setAns5] = useState(false);
  const [open5, setOpen5] = useState(true);

  const [ans6, setAns6] = useState(false);
  const [open6, setOpen6] = useState(true);

  const [ans7, setAns7] = useState(false);
  const [open7, setOpen7] = useState(true);

  const [ans8, setAns8] = useState(false);
  const [open8, setOpen8] = useState(true);

  const [ans9, setAns9] = useState(false);
  const [open9, setOpen9] = useState(true);

  const click = () => {
    setAns(true);
    setOpen(false);
  }

  const clickRev = () => {
    setAns(false);
    setOpen(true);
  }

  const click1 = () => {
    setAns1(true);
    setOpen1(false);
  }

  const clickRev1 = () => {
    setAns1(false);
    setOpen1(true);
  }

  const click2 = () => {
    setAns2(true);
    setOpen2(false);
  }

  const clickRev2 = () => {
    setAns2(false);
    setOpen2(true);
  }

  const click3 = () => {
    setAns3(true);
    setOpen3(false);
  }

  const clickRev3 = () => {
    setAns3(false);
    setOpen3(true);
  }

  const click4 = () => {
    setAns4(true);
    setOpen4(false);
  }
   

  const clickRev4 = () => {
    setAns4(false);
    setOpen4(true);
  }

  const click5 = () => {
    setAns5(true);
    setOpen5(false);
  }
   

  const clickRev5 = () => {
    setAns5(false);
    setOpen5(true);
  }

  const click6 = () => {
    setAns6(true);
    setOpen6(false);
  }
   

  const clickRev6 = () => {
    setAns6(false);
    setOpen6(true);
  }

  const click7 = () => {
    setAns7(true);
    setOpen7(false);
  }
   

  const clickRev7 = () => {
    setAns7(false);
    setOpen7(true);
  }

  const click8 = () => {
    setAns8(true);
    setOpen8(false);
  }
   

  const clickRev8 = () => {
    setAns8(false);
    setOpen8(true);
  }


  const click9 = () => {
    setAns9(true);
    setOpen9(false);
  }
   

  const clickRev9 = () => {
    setAns9(false);
    setOpen9(true);
  }



  return (
    <div>

<div className="faq">

    <h2>FAQ</h2>

    <h6>Frequently Asked Questions (FAQs) for AlliedHealth:</h6>


    <div className="ques">

      <div>
        <h4>What is AlliedHealth?</h4>

        {  ans ? (
          <p>AlliedHealth is a Health Maintenance Organization (HMO) app that offers affordable and accessible healthcare solutions for individuals and organizations.</p>
          ):null
        }
        
      </div>

      <div>
        {
          open ? (
            <MdOutlineKeyboardArrowDown className='arr-icon' onClick={click}/>

          ):<MdOutlineKeyboardArrowUp className='arr-icon' onClick={clickRev}/>

        }
        
      </div>
      
    </div>



    <div className="ques">

      <div>
        <h4>How does AlliedHealth work?</h4>

        {  ans1 ? (
          <p>Users can sign up, select a healthcare plan, make payments, and access a range of healthcare services through the AlliedHealth app.</p>
          ):null
        }
        
      </div>

      <div>
        {
          open1 ? (
            <MdOutlineKeyboardArrowDown className='arr-icon' onClick={click1}/>

          ):<MdOutlineKeyboardArrowUp className='arr-icon' onClick={clickRev1}/>

        }
        
      </div>
      
    </div>



    <div className="ques">

      <div>
        <h4>What types of healthcare services does AlliedHealth provide?</h4>

        {  ans2 ? (
          <p>AlliedHealth offers a wide range of healthcare services, including consultations, diagnostics, preventive care, and more.</p>
          ):null
        }
        
      </div>

      <div>
        {
          open2 ? (
            <MdOutlineKeyboardArrowDown className='arr-icon' onClick={click2}/>

          ):<MdOutlineKeyboardArrowUp className='arr-icon' onClick={clickRev2}/>

        }
        
      </div>
      
    </div>




    <div className="ques">

      <div>
        <h4>Can I customize my healthcare plan with AlliedHealth?</h4>

        {  ans3 ? (
          <p>Yes, AlliedHealth allows users to customize their healthcare plans based on their specific needs and budget.</p>
          ):null
        }
        
      </div>

      <div>
        {
          open3 ? (
            <MdOutlineKeyboardArrowDown className='arr-icon' onClick={click3}/>

          ):<MdOutlineKeyboardArrowUp className='arr-icon' onClick={clickRev3}/>

        }
        
      </div>
      
    </div>


    <div className="ques">

      <div>
        <h4>How do I find healthcare providers through AlliedHealth?</h4>

        {  ans4 ? (
          <p>Users can easily locate healthcare providers near them using the provider search feature within the AlliedHealth app.</p>
          ):null
        }
        
      </div>

      <div>
        {
          open4 ? (
            <MdOutlineKeyboardArrowDown className='arr-icon' onClick={click4}/>

          ):<MdOutlineKeyboardArrowUp className='arr-icon' onClick={clickRev4}/>

        }
        
      </div>
      
    </div>



    <div className="ques">

      <div>
        <h4>Is AlliedHealth available for organizations?</h4>

        {  ans5 ? (
          <p>Yes, AlliedHealth provides healthcare solutions for organizations, including small and medium-sized enterprises (SMEs).</p>
          ):null
        }
        
      </div>

      <div>
        {
          open5 ? (
            <MdOutlineKeyboardArrowDown className='arr-icon' onClick={click5}/>

          ):<MdOutlineKeyboardArrowUp className='arr-icon' onClick={clickRev5}/>

        }
        
      </div>
      
    </div>



    <div className="ques">

      <div>
        <h4>What are the benefits of joining the AlliedHealth community?</h4>

        {  ans6 ? (
          <p>Being part of the AlliedHealth community provides users with access to support, resources, and health education to help them on their wellness journey.</p>
          ):null
        }
        
      </div>

      <div>
        {
          open6 ? (
            <MdOutlineKeyboardArrowDown className='arr-icon' onClick={click6}/>

          ):<MdOutlineKeyboardArrowUp className='arr-icon' onClick={clickRev6}/>

        }
        
      </div>
      
    </div>


    <div className="ques">

      <div>
        <h4>How secure is my data on AlliedHealth?</h4>

        {  ans7 ? (
          <p>AlliedHealth prioritizes the security and privacy of user data, employing encryption and other security measures to safeguard personal information.</p>
          ):null
        }
        
      </div>

      <div>
        {
          open7 ? (
            <MdOutlineKeyboardArrowDown className='arr-icon' onClick={click7}/>

          ):<MdOutlineKeyboardArrowUp className='arr-icon' onClick={clickRev7}/>

        }
        
      </div>
      
    </div>


    <div className="ques">

      <div>
        <h4>Can I access AlliedHealth from anywhere?</h4>

        {  ans8 ? (
          <p>Yes, the AlliedHealth app is accessible from anywhere with an internet connection, allowing users to manage their healthcare needs on the go.</p>
          ):null
        }
        
      </div>

      <div>
        {
          open8 ? (
            <MdOutlineKeyboardArrowDown className='arr-icon' onClick={click8}/>

          ):<MdOutlineKeyboardArrowUp className='arr-icon' onClick={clickRev8}/>

        }
        
      </div>
      
    </div>


    <div className="ques">

      <div>
        <h4>How can I get support if I have questions or issues with AlliedHealth?</h4>

        {  ans9 ? (
          <p>AlliedHealth offers customer support through various channels, including email, phone, and in-app messaging, to assist users with any questions or concerns they may have.</p>
          ):null
        }
        
      </div>

      <div>
        {
          open9 ? (
            <MdOutlineKeyboardArrowDown className='arr-icon' onClick={click9}/>

          ):<MdOutlineKeyboardArrowUp className='arr-icon' onClick={clickRev9}/>

        }
        
      </div>
      
    </div>




</div>
        
    </div>
  )
}

export default Faq