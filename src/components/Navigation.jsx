import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import closebar from '/public/assets/closebar.svg';
import menu from '/public/assets/menu.svg';
import { navLinks } from '@/helpers/data';

export default function Navigation() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      {/* Sidebar button */}
      <button onClick={toggleSidebar} className="md:hidden px-4 py-2">
        <Image src={menu} alt="Sidebar Icon" />
      </button>

      <nav
        className={`fixed top-0 right-0 w-[251px] h-full ${
          showSidebar ? 'translate-x-0 z-50' : 'translate-x-full z-0'
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex ${
          showSidebar ? 'bg-white shadow-lg' : 'bg-transparent'
        } md:transition-none`}
      >
        <div
          className={`flex flex-col md:flex-row ${
            showSidebar ? 'block' : 'hidden'
          } md:block`}
        >
          {/* Button to close sidebar */}
          <button
            onClick={toggleSidebar}
            className="self-end p-6 pb-11 md:hidden"
            aria-label="Close Sidebar"
          >
            <Image src={closebar} alt="Close Sidebar" />
          </button>

          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`gap-1 nav-text ${
                showSidebar ? 'flex justify-end px-6 py-2 ' : 'px-4'
              }`}
              target={item.target}
              onClick={() => setShowSidebar(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </nav>
      {/* Sidebar shadow */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}
