import Image from 'next/image';
import Link from 'next/link';

import congrats from '/public/assets/congrats.svg';

export default function Poppup({ setShowPopup, title, message }) {
  return (
    <div className="fixed inset-0 flex justify-center text-center items-center bg-black bg-opacity-30 z-40">
      <div className="py-16 px-14 bg-footer-lightblue rounded-md shadow-lg max-md:max-w-[315px] max-md:h-[434px] max-md:px-4 max-md:py-6">
        <section>
          <Image
            src={congrats}
            alt="congrats"
            className="object-contain max-md:max-w-[234px]"
          />
        </section>
        <section className="mt-16 max-md:mt-6">
          {title && <h1 className="poppup-title">{title}</h1>}
          {message && (
            <p className="mt-4 text-footer-title text-base font-normal font-text text-balance tracking-tightester break-words max-md:text-sm">
              {message}
            </p>
          )}
        </section>
        <Link href="/">
          <button
            onClick={() => setShowPopup(false)}
            className="button mt-9 max-md:mt-4"
          >
            Home
          </button>
        </Link>
      </div>
    </div>
  );
}
