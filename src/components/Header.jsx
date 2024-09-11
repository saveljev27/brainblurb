import Image from 'next/image';

import Logo from './Logo';
import Navigation from './Navigation';
import clouds from '/public/assets/clouds.svg';

export default function Header() {
  return (
    <header className="flex relative flex-col items-center px-16 pt-6 pb-36 w-full min-h-[300px] max-md:min-h-[200px] max-md:px-5 max-md:pb-12 max-md:max-w-full overflow-visible">
      <div className="absolute inset-0 w-full h-[420px] max-md:h-[220px] overflow-visible md:translate-y-[-120px]">
        <Image
          loading="lazy"
          src={clouds}
          alt="Brainblurb Logo"
          fill
          style={{ objectFit: 'cover' }}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex relative justify-between items-center w-full max-w-[1035px] mx-auto px-4">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
