import { useState } from 'react';

import PageHead from '@/components/PageHead';
import sendMessageForm from '../api/sendMessageForm';
import Poppup from '@/components/Poppup';
import mainwave from '/public/assets/mainwave.svg';
import logo from '/public/assets/logo.svg';

export default function Contact() {
  const [showPopup, setShowPopup] = useState(false);
  const [statusText, setStatusText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const result = await sendMessageForm(formData);

    if (result.success) {
      setShowPopup(true);
      setStatusText('');
      e.target.reset();
    } else {
      setStatusText(result.error);
    }
  };

  return (
    <>
      <PageHead
        title={'Brainblurb | Contact'}
        description={'Brainblurb contact'}
        ogImg={logo.src}
      />

      <div className="min-h-screen relative overflow-hidden">
        <main className="flex flex-col items-center px-20 pb-16 w-full min-h-[484px] max-md:px-8 max-md:mt-10 max-md:max-w-full">
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${mainwave.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          <div className="flex relative flex-col items-center mt-0 w-full max-w-[1039px] max-md:max-w-full ">
            <section className="w-full">
              <h1 className="text-[80px]/[96px] text-footer-title font-semibold font-text break-words max-md:text-4xl/[0px]">
                Contact
              </h1>
            </section>
            <section className="flex flex-col w-full">
              <p className="text-xl text-footer-gray font-normal font-text tracking-tightest break-words w-2/3 mt-32 max-md:hidden">
                Please fill out the form below to request a quote for a project,
                inquire about a collaboration or simply say hello.
              </p>
              <div className="mt-10 max-md:mt-5">
                <form
                  className="flex overflow-hidden justify-start flex-col mt-8 rounded-lg p-12 bg-footer-lightblue max-w-[687px] max-md:px-8 max-md:py-9"
                  onSubmit={handleSubmit}
                >
                  {statusText && setTimeout(() => setStatusText(''), 3000) && (
                    <div className="bg-primary-cyan text-white font-text p-2 rounded ">
                      {statusText}
                    </div>
                  )}
                  <label htmlFor="name" className="mt-8 pb-4">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name here"
                    className="min-h-[50px] px-4 py-2 rounded-lg"
                    required
                  />
                  <label htmlFor="email" className="mt-8 pb-4">
                    E-mail Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your e-mail address here"
                    className="min-h-[50px] px-4 py-2 rounded-lg"
                    required
                  />
                  <label htmlFor="message" className="mt-8 pb-4">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message here"
                    className="min-h-[129px] px-4 py-2 rounded-lg"
                    required
                  ></textarea>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-4 py-2 mt-8 text-lg/[24px] font-medium font-text text-white bg-primary-cyan rounded-lg break-word"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </section>
            {showPopup && (
              <Poppup
                setShowPopup={setShowPopup}
                title={
                  <>
                    <span>Thank you!</span>
                    <br />
                    <span>Your message was sent.</span>
                  </>
                }
                message="We will contact you as soon as possible."
              />
            )}
          </div>
        </main>
      </div>
    </>
  );
}
