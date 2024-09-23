import Head from 'next/head';
import foodIcon from '@/assets/food_icon.svg';
import peachIcon from '@/assets/peach_icon.svg';
import calenderIcon from '@/assets/calender_icon.svg';
import clipboardIcon from '@/assets/clipboard_icon.svg';
import recycleIcon from '@/assets/recycle_icon.svg';
import checkmarkIcon from '@/assets/checkmark_icon.svg';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Meal Plan Generator</title>
        <meta name="description" content="Custom meal plans for specific health conditions" />
      </Head>
      
      <div className="min-h-screen flex flex-col items-center flex-wrap">
        {/* Hero Section */}
        <section className="w-full h-screen bg-gradient-to-r from-green-400 to-green-800 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-5xl font-bold mb-4">Personalized Meal Plans for Your Health</h1>
          <p className="text-lg mb-8">Get custom meal plans tailored to your specific health conditions and dietary preferences.</p>
          <input className='text-black rounded-lg px-4 py-2 border border-gray-300 w-1/2 mb-8 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent focus:ring-offset-2 focus:ring-offset-white transition ease-in-out duration-500'></input>
        </section>


        <section className='w-full h-screen flex gap-8 items-center justify-center flex-wrap text-black px-6 py-8'>

            {/* Content Section */}
            <div className="card p-8 w-1/4 flex flex-col justify-between gap-4 items-start rounded-lg shadow-md">
              <Image src={foodIcon} alt="Food Icon" className='w-16 rounded-lg' />
              <span className='text-xl font-bold text-center text-[#2F855A]'>Personalized Meal Plans</span>
              <div className='content text-md font-light leading-normal'>
                <p>Every meal plan is tailored to your unique health conditions, dietary restrictions, and personal goals. Whether you're managing diabetes, looking to lose weight, or just want healthier meals, our AI-powered generator creates a plan just for you.</p>
              </div>
            </div>

            <div className="card p-8 w-1/4 flex flex-col justify-between gap-4 items-start rounded-lg shadow-md">
              <Image src={peachIcon} alt="Peach Icon" className='w-16 rounded-lg' />
              <span className='text-xl font-bold text-center text-[#2F855A]'>Expert Nutritional Insights</span>
              <div className='content text-md font-light leading-normal'>
                <p>Get more than just recipes—receive detailed nutritional information for every meal. Track your intake of calories, protein, fats, and carbs with ease, and stay on top of your health goals with science-backed recommendations.</p>
              </div>
            </div>

            <div className="card p-8 w-1/4 flex flex-col justify-between gap-4 items-start rounded-lg shadow-md">
              <Image src={calenderIcon} alt="Calender Icon" className='w-16 rounded-lg' />
              <span className='text-xl font-bold text-center text-[#2F855A]'>Effortless Meal Planning</span>
              <div className='content text-md font-light leading-normal'>
                <p>Say goodbye to the hassle of meal planning! With just a few clicks, we generate a weekly meal plan based on your preferences and health needs. Save time and energy while enjoying balanced, nutritious meals every day.</p>
              </div>
            </div>

            <div className="card p-8 w-1/4 flex flex-col justify-between gap-4 items-start rounded-lg shadow-md">
              <Image src={clipboardIcon} alt="Clipboard Icon" className='w-16 rounded-lg' />
              <span className='text-xl font-bold text-center text-[#2F855A]'>Shopping List Generator</span>
              <div className='content text-md font-light leading-normal'>
                <p>Simplify your grocery shopping with our automatic shopping list generator. Every meal plan comes with a ready-made shopping list, customized to match your chosen meals and local grocery store availability.</p>
              </div>
            </div>

            <div className="card p-8 w-1/4 flex flex-col justify-between gap-4 items-start rounded-lg shadow-md">
              <Image src={recycleIcon} alt="Food Icon" className='w-16 rounded-lg' />
              <span className='text-xl font-bold text-center text-[#2F855A]'>Flexible and Adaptable</span>
              <div className='content text-md font-light leading-normal'>
                <p>Life changes, and so do your needs. Update your health conditions, dietary preferences, or goals at any time, and receive instant updates to your meal plans. Whether you're following a special diet or simply need variety, we’ve got you covered.</p>
              </div>
            </div>

            <div className="card p-8 w-1/4 flex flex-col justify-between gap-4 items-start rounded-lg shadow-md">
              <Image src={checkmarkIcon} alt="Food Icon" className='w-16 rounded-lg' />
              <span className='text-xl font-bold text-center text-[#2F855A]'>Trusted by Health Experts</span>
              <div className='content text-md font-light leading-normal'>
                <p>Our meal plans are backed by the latest nutritional science and crafted with guidance from registered dietitians and health experts. Whether you're managing a condition or just focusing on your health, you can trust us to deliver quality advice.</p>
              </div>
            </div>

          </section>

        
      </div>  
    </>
  );
}
