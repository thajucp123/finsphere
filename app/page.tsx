import FinSphereLogo from '@/app/ui/finsphere-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { poppins } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 text-white shadow-lg">
      
      <div className="flex flex-col h-20 shrink-0 items-start justify-end rounded-lg bg-gray-900 p-4 md:h-52">
        <FinSphereLogo />
        <br />
        <p className="text-2xl text-white">Take control of your finances, simplified.</p>
    </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
      <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-800/80 backdrop-blur border-2 border-gray-300/30 px-6 py-10 md:w-2/5 md:px-20">
        <div className="relative w-0 h-0 border-t-[15px] border-b-[15px] border-l-[26px] border-t-transparent border-b-transparent border-l-white" />
          <p className={`${poppins.className} text-xl text-white-200 md:text-3xl md:leading-normal`}>
            <strong>Welcome to FinSphere,</strong> a comprehensive financial management platform designed to streamline and simplify finance, invoicing, and expense tracking.
          </p>
          <Link href="/login" className="flex items-center gap-5 hover:gap-7 self-start rounded-full bg-gradient-to-r from-[#66B0FF] to-[#7A49E6] px-6 py-3 text-sm font-medium text-white shadow-md hover:shadow-[#95e3ff] hover:shadow-md transition-colors md:text-base border-[#c949e6] border-2 focus:outline-none">
            <span>Log in</span>
            <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image src={'/hero-desktop.png'} 
          height={1000} width={760} 
          className="hidden md:block" 
          alt="FinSphere Descriptive Image" />
          <Image src={'/hero-mobile.png'} 
          height={1000} width={760} 
          className="hidden md:block" 
          alt="FinSphere Descriptive Image" />
        </div>
      </div>
    </main>
  );
}
