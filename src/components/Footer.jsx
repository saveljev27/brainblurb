import Link from 'next/link';

import Logo from './Logo';
import NewsletterSignup from './NewsletterSignup';
import { socialLinks, footerLinks } from '@/helpers/data';

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center px-20 py-20 w-full bg-footer-lightblue max-md:px-8 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1016px] max-md:max-w-full">
        <div className="flex flex-wrap justify-between items-start w-full max-md:max-w-full max-md:flex-col">
          <div className="flex flex-col items-start ">
            <Logo />
            <nav className="mt-5">
              {footerLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block footer-text mt-5"
                  target={link.target}
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex gap-28 mt-6 max-md:flex-col md:self-end max-md:gap-6">
            <div className="flex flex-col">
              <h2 className="footer-title">Social</h2>
              <div className="flex flex-col max-md:flex-row max-md:gap-5 social-links">
                {socialLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="mt-5 footer-text"
                    target="_blank"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="footer-title">Reach us</h2>
              <Link href="/contact" className="mt-5 footer-text">
                Contact form
              </Link>
            </div>
          </div>
        </div>
        <NewsletterSignup />
      </div>
    </footer>
  );
}
