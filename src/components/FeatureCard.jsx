import Image from 'next/image';

export default function FeatureCard({ icon, description, center }) {
  return (
    <div
      className={`flex flex-col items-center text-center max-w-[334px] ${
        center ? 'col-span-full' : ''
      }`}
    >
      {icon && (
        <Image
          loading="lazy"
          src={icon}
          alt={description}
          width={50}
          height={50}
          className="object-contain aspect-square w-[50px]"
        />
      )}
      <div className="card-text mt-4">{description}</div>
    </div>
  );
}
