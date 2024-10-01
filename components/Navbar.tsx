
import logoIcon from '@/public/assets/logo_green.svg';
import Image from 'next/image';

export default function Navbar() {

    return (
        <div className="flex justify-center items-center gap-16 p-4 fixed top-0 left-0 w-full transparent backdrop-blur-sm z-20">
            <Image src={logoIcon} alt="logo" className="w-[100px] z-10 justify-self-center max-sm:w-[80px]" />
        </div>
    )
}