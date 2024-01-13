import "./Contact_us.css";
import Footer from "../Footer/Footer.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const Contact_us = () => {
  const name = sessionStorage.getItem("name");
  const password = sessionStorage.getItem("password");
  const [message, setMessage] = useState("");
  const submit = async () => {
    const response = await fetch("http://localhost:3000/form", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ name, password, message }),
    });
    const data = await response.json();
    if (data.success) {
      toast("Form Submitted Successfully", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast(data.message, {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  return (
    <>
      <nav className='navbar navbar-contact'>
        <h1 className='title headings'>E-Commerce</h1>
        <ul className='nav-ul'>
          <li className='nav-li'>
            <Link to='/main'>Home</Link>
          </li>
          <li className='nav-li'>
            <Link to='/about'>About</Link>
          </li>
          <li className='nav-li'>
            <Link to='/services'>Services</Link>
          </li>
          <li className='nav-li'>
            <Link to='/contact'>Contact us</Link>
          </li>
        </ul>
      </nav>
      <section className='text-gray-600 body-font relative'>
        <div className='absolute inset-0 bg-gray-300'>
          <iframe
            title='map'
            width='100%'
            height='100%'
            frameBorder='0'
            marginHeight='0'
            marginWidth='0'
            scrolling='no'
            src='https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed'
            style={{
              filter: "grayscale(1) contrast(1.2) opacity(0.4)",
            }}></iframe>
        </div>
        <div className='container px-5 py-24 mx-auto flex'>
          <div className='lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md'>
            <h2 className='text-gray-900 text-lg mb-1 font-medium title-font'>
              Contact us
            </h2>
            <p className='leading-relaxed mb-5 text-gray-600'>
              Have a question, comment, or feedback? We'd love to hear from you!
              Fill out the form below, and our team will get back to you as soon
              as possible.
            </p>
            <div className='relative mb-4'>
              <label
                htmlFor='email'
                className='leading-7 text-sm text-gray-600'>
                Name
              </label>
              <input
                type='text'
                id='email'
                value={name}
                readOnly
                name='email'
                className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            </div>
            <div className='relative mb-4'>
              <label
                htmlFor='message'
                className='leading-7 text-sm text-gray-600'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                spellCheck='false'
                onChange={(e) => setMessage(e.target.value)}
                data-ms-editor='true'></textarea>
            </div>
            <button
              className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
              onClick={submit}>
              Submit
            </button>
            <p className='text-xs text-gray-500 mt-3'>
              We're Here for You We strive to respond to all inquiries within
              time.Fill out the form below and let's start the conversation!
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Contact_us;
