import { useState } from 'react';
import Image from 'next/image';

import sendSignUpForm from '@/pages/api/sendSignUpForm';
import sendIcon from '/public/assets/icon_send.svg';
import Poppup from '@/components/Poppup';

export default function NewsletterSignup() {
  const [showPopup, setShowPopup] = useState(false);
  const [statusText, setStatusText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const result = await sendSignUpForm(formData);

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
      {showPopup && (
        <Poppup
          setShowPopup={setShowPopup}
          title={'Thank you for signing up!'}
          message={'Get ready for exciting updates and events.'}
        />
      )}
      <form
        className="flex self-start mt-12 max-md:mt-10"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="max-xs:text-[10px] whitespace-nowrap"
          >
            Sign up for events and announcements
          </label>
          <div className="flex mt-4 rounded-l bg-white min-h-[50px] max-w-[350px]">
            <input
              type="email"
              id="email"
              name="email"
              className="w-full h-full px-3 rounded-l"
              placeholder="Enter your e-mail address here"
              aria-label="Enter your e-mail address here"
              required
            />
          </div>
          {statusText && (
            <div className="bg-primary-cyan text-white font-text p-2 mt-2 rounded ">
              {statusText}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="flex justify-center items-center bg-newsletter-btn mt-4 rounded-r w-[45px] h-[50px] "
        >
          <Image
            loading="lazy"
            src={sendIcon}
            alt="Submit"
            width={30}
            height={30}
            className="max-w-full max-h-full"
          />
        </button>
      </form>
    </>
  );
}
