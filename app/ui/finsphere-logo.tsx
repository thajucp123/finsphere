import { CurrencyRupeeIcon } from '@heroicons/react/24/solid';
import { poppins } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${poppins.className} flex flex-row items-center leading-none text-white`}
    >
      <CurrencyRupeeIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[20px] md:text-[25px]">FinSphere</p>
    </div>
  );
}
