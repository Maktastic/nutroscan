import Head from 'next/head';
import foodIcon from '@/public/assets/food_icon.svg';
import peachIcon from '@/public/assets/peach_icon.svg';
import calenderIcon from '@/public/assets/calender_icon.svg';
import clipboardIcon from '@/public/assets/clipboard_icon.svg';
import recycleIcon from '@/public/assets/recycle_icon.svg';
import checkmarkIcon from '@/public/assets/checkmark_icon.svg';
import wandIcon from '@/public/assets/wand.svg';
import logoIcon from '@/public/assets/logo_green.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='relative'>
      <Head>
        <title>Meal Plan Generator</title>
        <meta name="description" content="Custom meal plans for specific health conditions" />
      </Head>

      <div className='flex justify-center items-center gap-16 p-4 fixed top-0 left-0 w-full transparent backdrop-blur-sm z-20'>
        <Image src={logoIcon} alt={'logo'} className='w-[100px] z-10 justify-self-center' />
      </div>

      <div className="min-h-screen flex flex-col items-center flex-wrap">

        {/* Hero Section */}
        <section className="w-full h-screen bg-[url('/assets/background.avif')] bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center text-center text-black px-6 z-10 border-b border-gray-300">
          <h1 className="text-5xl font-bold text-black mb-4"><span className='bg-gradient-to-r p-4 text-white from-green-900 to-green-700 rounded-lg'>AI</span> Meal Plans for Disease Management</h1>
          <p className="text-lg text-black mb-8">Get custom meal plans tailored to your specific health conditions and dietary preferences.</p>

          <div className='w-1/2 flex items-center relative'>
            <input className='text-black rounded-lg px-4 py-2 border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent focus:ring-offset-2 focus:ring-offset-white transition ease-in-out duration-500'></input>
            <Image src={wandIcon} alt="wand icon" className='w-12 absolute right-0' />
          </div>

          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 mt-4 cursor-pointer hover:bg-green-200 group">
            <i className="fas fa-arrow-right text-xl text-green-600 group-hover:text-green-800"></i>
          </div>

        </section>


        <section className='w-full h-screen flex gap-8 items-center justify-center flex-wrap text-black px-6 py-8 border-b border-gray-300'>

          {/* Content Section */}
          <div className="card p-8 w-1/4 flex flex-col justify-between gap-4 items-start rounded-lg shadow-lg">
            <Image src={foodIcon} alt="Food Icon" className='w-16 h-16 rounded-lg' />
            <span className='text-xl font-bold text-center text-[#2F855A]'>Personalized Meal Plans</span>
            <div className='content text-md font-light leading-normal line-clamp-6'>
              <p>Every meal plan is tailored to your unique health conditions, dietary restrictions, and personal goals. Whether you're managing diabetes, looking to lose weight, or just want healthier meals, our AI-powered generator creates a plan just for you.</p>
            </div>
            {/* <span className='self-end text-sm text-emerald-700 cursor-pointer font-normal'>Learn More</span> */}
          </div>

          <div className="card p-8 w-1/4 flex flex-col justify-between gap-4 items-start rounded-lg">
            <Image src={peachIcon} alt="Peach Icon" className='w-16 h-16 rounded-lg' />
            <span className='text-xl font-bold text-center text-[#2F855A]'>Expert Nutritional Insights</span>
            <div className='content text-md font-light leading-normal line-clamp-6'>
              <p>Get more than just recipes—receive detailed nutritional information for every meal. Track your intake of calories, protein, fats, and carbs with ease, and stay on top of your health goals with science-backed recommendations.</p>
            </div>
          </div>

          <div className="card p-8 w-1/4 flex flex-col justify-between gap-4 items-start rounded-lg">
            <Image src={calenderIcon} alt="Calender Icon" className='w-16 h-16 rounded-lg' />
            <span className='text-xl font-bold text-center text-[#2F855A]'>Effortless Meal Planning</span>
            <div className='content text-md font-light leading-normal line-clamp-6'>
              <p>Say goodbye to the hassle of meal planning! With just a few clicks, we generate a weekly meal plan based on your preferences and health needs. Save time and energy while enjoying balanced, nutritious meals every day.</p>
            </div>
          </div>

          <div className="card p-8 w-1/4 flex flex-col justify-between gap-4 items-start rounded-lg">
            <Image src={clipboardIcon} alt="Clipboard Icon" className='w-16 h-16 rounded-lg' />
            <span className='text-xl font-bold text-center text-[#2F855A]'>Shopping List Generator</span>
            <div className='content text-md font-light leading-normal line-clamp-6'>
              <p>Simplify your grocery shopping with our automatic shopping list generator. Every meal plan comes with a ready-made shopping list, customized to match your chosen meals and local grocery store availability.</p>
            </div>
          </div>

          <div className="card p-8 w-1/4 flex flex-col justify-between gap-4 items-start rounded-lg">
            <Image src={recycleIcon} alt="Food Icon" className='w-16 h-16 rounded-lg' />
            <span className='text-xl font-bold text-center text-[#2F855A]'>Flexible and Adaptable</span>
            <div className='content text-md font-light leading-normal line-clamp-6'>
              <p>Life changes, and so do your needs. Update your health conditions, dietary preferences, or goals at any time, and receive instant updates to your meal plans. Whether you're following a special diet or simply need variety, we’ve got you covered.</p>
            </div>
          </div>

          <div className="card p-8 w-1/4 flex flex-col justify-between gap-4 items-start rounded-lg">
            <Image src={checkmarkIcon} alt="Food Icon" className='w-16 h-16 rounded-lg' />
            <span className='text-xl font-bold text-center text-[#2F855A]'>Trusted by Health Experts</span>
            <div className='content text-md font-light leading-normal line-clamp-6'>
              <p>Our meal plans are backed by the latest nutritional science and crafted with guidance from registered dietitians and health experts. Whether you're managing a condition or just focusing on your health, you can trust us to deliver quality advice.</p>
            </div>
          </div>

        </section>

        <section className='w-full h-screen flex flex-col shadow-lg justify-center gap-20 items-center text-black px-6 py-8 border-b border-gray-300'>

          <div className='w-full h-50 flex flex-col gap-3 justify-center items-center p-4'>
            <span className='text-4xl font-bold text-gray-800'>How it works</span>
            <div className='w-14 bg-[#2F855A] h-1 border-none'></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left container">

            {/* Step 1 */}
            <div className="flex flex-col items-center text-center md:text-left">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 mb-4">
                <i className="fas fa-notes-medical text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Step 1: Input</h3>
              <p className="text-gray-600 text-center">Enter your health details and dietary preferences to get started.</p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center md:text-left">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 mb-4">
                <i className="fas fa-brain text-3xl text-green-600"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Step 2: Generate</h3>
              <p className="text-gray-600 text-center">Our AI generates a personalized meal plan tailored to your condition.</p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center md:text-left">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-100 mb-4">
                <i className="fas fa-pencil-alt text-3xl text-purple-600"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Step 3: Customize</h3>
              <p className="text-gray-600 text-center">Review and customize your meal plan to suit your preferences.</p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center md:text-left">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-100 mb-4">
                <i className="fas fa-shopping-cart text-3xl text-yellow-600"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Step 4: Shop</h3>
              <p className="text-gray-600 text-center">Download your shopping list and easily purchase all the ingredients.</p>
            </div>
          </div>
        </section>

        <footer className="w-full bg-emerald-900 text-white py-12">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Nutroscan Meal Plans</h3>
              <p className="text-white mb-4">AI-powered meal plans tailored to help manage your health condition with ease and precision.</p>
              <p className="text-white">© {new Date().getFullYear()} Nutroscan. All rights reserved.</p>
            </div>


            <div className='justify-self-end'>
              <Image src={logoIcon} alt="Logo Icon" className='w-32 h-32' />
            </div>

          </div>
        </footer>

      </div>
    </div>
  );
}
