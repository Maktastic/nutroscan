import Head from 'next/head';
import foodIcon from '@/assets/food_icon.svg';
import peachIcon from '@/assets/peach_icon.svg';
import calenderIcon from '@/assets/calender_icon.svg';
import clipboardIcon from '@/assets/clipboard_icon.svg';
import recycleIcon from '@/assets/recycle_icon.svg';
import checkmarkIcon from '@/assets/checkmark_icon.svg';
import wandIcon from '@/assets/wand.svg';
import logoIcon from '@/assets/logo.png';
import Image from 'next/image';
  
export default function Home() {
  return (
    <>
      <Head>
        <title>Meal Plan Generator</title>
        <meta name="description" content="Custom meal plans for specific health conditions" />
      </Head>


			<div className='flex justify-center items-center gap-16 absolute top-0 left-0 w-full bg-transparent z-20'>
				<Image src={logoIcon} alt={'logo'} className='w-40 z-10 self-start' />
				<ul className='flex gap-12'>
					<li className='font-bold tracking-wider'>Home</li>
					<li className='font-bold tracking-wider'>About</li>
					<li className='font-bold tracking-wider'>Contact</li>
					<li className='font-bold tracking-wider'>Pricing</li>
					<li className='font-bold tracking-wider'>About</li>
				</ul>
			</div>
      
      <div className="min-h-screen flex flex-col items-center flex-wrap">
				
        {/* Hero Section */}
        <section className="w-full h-screen flex flex-col items-center justify-center text-center text-white px-6 z-10 bg-gradient-to-r from-green-900 to-green-500">
					<h1 className="text-5xl font-bold mb-4"><span className='bg-gradient-to-r p-4 from-green-900 to-green-700 rounded-lg'>AI</span> Meal Plans for Disease Management</h1>
          <p className="text-lg mb-8">Get custom meal plans tailored to your specific health conditions and dietary preferences.</p>

					<div className='blocker w-1/2 flex items-center relative'>
						<input className='text-black rounded-lg px-4 py-2 border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent focus:ring-offset-2 focus:ring-offset-white transition ease-in-out duration-500'></input>
						<Image src={wandIcon} alt="wand icon" className='w-12 absolute right-0' />
					</div>
          
        </section>


        <section className='w-full h-screen flex gap-8 items-center justify-center flex-wrap text-black px-6 py-8'>

            {/* Content Section */}
            <div className="card p-8 w-1/4 flex flex-col justify-between gap-4 items-start rounded-lg shadow-lg">
              <Image src={foodIcon} alt="Food Icon" className='w-16 h-16 rounded-lg' />
              <span className='text-xl font-bold text-center text-[#2F855A]'>Personalized Meal Plans</span>
              <div className='content text-md font-light leading-normal line-clamp-6'>
                <p>Every meal plan is tailored to your unique health conditions, dietary restrictions, and personal goals. Whether you're managing diabetes, looking to lose weight, or just want healthier meals, our AI-powered generator creates a plan just for you.</p>
              </div>
							<span className='self-end text-sm text-emerald-700 cursor-pointer font-normal'>Learn More</span>
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

        
      </div>  
    </>
  );
}
