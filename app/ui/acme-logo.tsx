import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >MySQL
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      <Image
        src="/company-logo.png"
        width={200}
        height={55}
        className="hidden md:block"
        alt="Logo desktop version"
      />
      <Image
        src="/company-logo.png"
        width={100}
        height={25}
        className="block md:hidden"
        alt="Logo mobile version"
      />
      {/* <p className="text-[44px]">SWBC</p> */}
    </div>
  );
}
