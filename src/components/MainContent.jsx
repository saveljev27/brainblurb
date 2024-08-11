import Image from 'next/image';
import Link from 'next/link';

import FeatureCard from './FeatureCard';
import mainwave from '/public/assets/mainwave.svg';
import { features } from '@/helpers/data';

export default function MainContent() {
  return (
    <div className="min-h-screen">
      <main className="flex relative flex-col items-center px-20 pb-16 w-full min-h-[484px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <Image
          loading="lazy"
          src={mainwave}
          alt="Main"
          className="object-cover absolute inset-0 size-full"
          style={{ top: '87px', zIndex: '1' }}
        />
        <div className="flex z-10 relative flex-col items-center mt-0 w-full max-w-[1039px] max-md:max-w-full ">
          <div className="grid grid-cols-1  gap-x-96 gap-y-10 justify-items-center align-items-center justify-content-center align-content-center w-full max-w-[1039px] mx-auto md:grid-cols-2">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                description={feature.description}
                center={index === features.length - 1}
              />
            ))}
          </div>
          <Link href="https://invest.brainblurb.com/" target="_blank">
            <button className="button mt-32">Join</button>
          </Link>
        </div>
      </main>
    </div>
  );
}
