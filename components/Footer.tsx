import Image from 'next/image';
import LogoDark from '@/public/assets/logo_dark.png';

export default function Footer() {
    return (
        <footer className="w-full bg-emerald-400 py-12 shadow-lg border-t border-gray-50 shadow shadow-inner-lg">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 max-sm:px-4 max-sm:flex max-sm:flex-col max-sm:flex-col-reverse">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl text-gray-800 font-bold mb-4 max-sm:text-md max-sm:text-center">Nutroscan Meal Plans</h3>
              <p className="mb-4 max-sm:text-sm text-gray-800 max-sm:text-center">AI-powered meal plans tailored to help manage your health condition with ease and precision.</p>
              <p className="max-sm:text-sm text-gray-800 max-sm:text-center">© {new Date().getFullYear()} Nutroscan. All rights reserved.</p>
              <p className='mt-3 max-sm:text-sm max-sm:justify-center flex gap-4'>
                <a href="/privacy-policy" className="text-gray-800 font-bold">Privacy Policy</a>
                <a href="/terms-and-conditions" className="text-gray-800 font-bold">Terms and Conditions</a>
              </p>
            </div>
            <div className="justify-self-end max-sm:self-center">
              <Image src={LogoDark} alt="Logo Icon" className="w-32 h-32 max-sm:w-20 max-sm:h-20" />
            </div>
          </div>
        </footer>
    )
}