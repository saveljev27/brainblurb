import Image from 'next/image';
import Link from 'next/link';

import logo from '/public/assets/logo.svg';

export default function Logo() {
  return (
    <Link href="/" className="flex gap-3">
      <Image
        loading="lazy"
        src={logo}
        width={35}
        height={35}
        alt="Brain Blurb Logo"
        className="object-contain"
      />
      <div className="my-auto basis-auto">
        <span className="text-xl/[0] text-nav-cyan font-heading font-medium break-words max-md:font-semibold">
          BRAIN
        </span>
        <span className="text-xl/[0] text-nav-cyan font-heading font-normal break-words max-md:font-medium">
          BLURB
        </span>
      </div>
    </Link>
  );
}
