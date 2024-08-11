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
        <div className="flex flex-col w-full max-w-[400px]">
          <label htmlFor="email" className=" whitespace-nowrap">
            Sign up for events and announcements
          </label>
          <div className="flex mt-4 rounded bg-white min-h-[50px] overflow-hidden w-full max-xs:flex-col max-xs:items-stretch">
            <input
              type="email"
              id="email"
              name="email"
              className="flex-grow px-3 border-none outline-none max-xs:pt-3"
              placeholder="Enter your e-mail address here"
              aria-label="Enter your e-mail address here"
              style={{ minWidth: '275px', flexBasis: 'auto', flexGrow: 1 }}
              required
            />
            <button
              type="submit"
              className="flex justify-center items-center bg-newsletter-btn w-[45px] h-[50px] border-none max-xs:mt-4 max-xs:w-full max-xs:h-auto"
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
          </div>

          {statusText && setTimeout(() => setStatusText(''), 3000) && (
            <div className="bg-primary-cyan text-white font-text p-2 mt-2 rounded ">
              {statusText}
            </div>
          )}
        </div>
      </form>
    </>
  );
}
