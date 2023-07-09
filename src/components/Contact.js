import React, { useState } from 'react'
import {useRef} from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef()
  const [isEmailSent, setIsEmailSent] = useState(false);
 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nx9016q', 'template_vg8guge', form.current, 'hYF7EQFiq5PI7QucL')
      .then((result) => {
          console.log(result.text);
          setIsEmailSent(true); 
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
                <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Send me a message</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='user_name' required/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='user_email' required/>
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button type="submit" className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            {isEmailSent && <p className='text-gray-300'>Email sent successfully!</p>}
        </form>
    </div>
  )
}
export default Contact