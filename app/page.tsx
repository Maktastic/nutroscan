'use client'
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
import { useState } from 'react';
import { Modal, Button } from '@nextui-org/react';
import MealPlanModal from '@/components/Modal';

export default function Home() {
  const [userInput, setUserInput] = useState<string>('');
  const [mealPlan, setMealPlan] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleGenerateMealPlan = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/generateMealPlan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput }), // Send user input to the backend
      });

      const data = await response.json();
      if (data.mealPlan) {
        setMealPlan(data.mealPlan);
        setIsModalOpen(true); // Open the modal when the meal plan is ready
      }
    } catch (error) {
      console.error('Error generating meal plan:', error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <>
      <Head>
        <title>Meal Plan Generator</title>
        <meta name="description" content="Custom meal plans for specific health conditions" />
      </Head>

      {/* Navbar */}
      <div className="flex justify-center items-center gap-16 p-4 fixed top-0 left-0 w-full transparent backdrop-blur-sm z-20">
        <Image src={logoIcon} alt="logo" className="w-[100px] z-10 justify-self-center" />
      </div>

      {/* Main Content */}
      <div className="min-h-screen flex flex-col items-center flex-wrap">

        {/* Hero Section */}
        <section className="w-full h-screen bg-[url('/assets/background.avif')] bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center text-center text-black px-6 z-10 border-b border-gray-300">
          <h1 className="text-5xl font-bold text-black mb-4">
            <span className="bg-gradient-to-r p-4 text-white from-green-900 to-green-700 rounded-lg mr-2">AI</span> 
            Meal Plans for Disease Management
          </h1>
          <p className="text-lg text-black mb-8">
            Get custom meal plans tailored to your specific health conditions and dietary preferences.
          </p>

          <form onSubmit={handleGenerateMealPlan} className="w-1/2 flex items-center relative">
            <input 
              type="text" 
              className="text-black rounded-lg px-4 py-2 border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition ease-in-out duration-500" 
              placeholder="Enter your dietary needs or health condition"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              required
            />
            <Image src={wandIcon} alt="wand icon" className="w-12 absolute right-2 top-2" />
          </form>

          <div className="flex items-center justify-center rounded-full bg-green-100 mt-4 cursor-pointer hover:bg-green-200 group">
            {loading ? 
              <button type="submit" className="text-xl text-green-600 group-hover:text-green-800">Generating...</button> 
              : 
              <button type="submit" className="w-12 h-12 text-xl text-green-600 group-hover:text-green-800"><i className="fas fa-arrow-right"></i></button> 
            }
            
          </div>
        </section>

        <MealPlanModal
          isModalOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          mealPlan={mealPlan}
        />

        {/* Content Section */}
        <section className="w-full h-screen flex gap-8 items-center justify-center flex-wrap text-black px-6 py-8 border-b border-gray-300">
          {[
            { icon: foodIcon, title: 'Personalized Meal Plans', description: 'Every meal plan is tailored to your unique health conditions, dietary restrictions, and personal goals. Whether you\'re managing diabetes, looking to lose weight, or just want healthier meals, our AI-powered generator creates a plan just for you.' },
            { icon: peachIcon, title: 'Expert Nutritional Insights', description: 'Get more than just recipes—receive detailed nutritional information for every meal. Track your intake of calories, protein, fats, and carbs with ease, and stay on top of your health goals with science-backed recommendations.' },
            { icon: calenderIcon, title: 'Effortless Meal Planning', description: 'Say goodbye to the hassle of meal planning! With just a few clicks, we generate a weekly meal plan based on your preferences and health needs. Save time and energy while enjoying balanced, nutritious meals every day.' },
            { icon: clipboardIcon, title: 'Shopping List Generator', description: 'Simplify your grocery shopping with our automatic shopping list generator. Every meal plan comes with a ready-made shopping list, customized to match your chosen meals and local grocery store availability.' },
            { icon: recycleIcon, title: 'Flexible and Adaptable', description: 'Life changes, and so do your needs. Update your health conditions, dietary preferences, or goals at any time, and receive instant updates to your meal plans. Whether you\'re following a special diet or simply need variety, we’ve got you covered.' },
            { icon: checkmarkIcon, title: 'Trusted by Health Experts', description: 'Our meal plans are backed by the latest nutritional science and crafted with guidance from registered dietitians and health experts. Whether you\'re managing a condition or just focusing on your health, you can trust us to deliver quality advice.' }
          ].map((card, index) => (
            <div key={index} className="card p-8 w-1/4 flex flex-col justify-between gap-4 items-start rounded-lg shadow-lg">
              <Image src={card.icon} alt={`${card.title} Icon`} className="w-16 h-16 rounded-lg" />
              <span className="text-xl font-bold text-center text-[#2F855A]">{card.title}</span>
              <p className="text-md font-light leading-normal line-clamp-6">{card.description}</p>
            </div>
          ))}
        </section>

        {/* How It Works Section */}
        <section className="w-full h-screen flex flex-col shadow-lg justify-center gap-20 items-center text-black px-6 py-8 border-b border-gray-300">
          <div className="w-full h-50 flex flex-col gap-3 justify-center items-center p-4">
            <span className="text-4xl font-bold text-gray-800">How it works</span>
            <div className="w-14 bg-[#2F855A] h-1 border-none"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left container">
            {[
              { step: 'Step 1: Input', icon: 'fas fa-notes-medical', description: 'Enter your health details and dietary preferences to get started.' },
              { step: 'Step 2: Generate', icon: 'fas fa-brain', description: 'Our AI generates a personalized meal plan tailored to your condition.' },
              { step: 'Step 3: Customize', icon: 'fas fa-pencil-alt', description: 'Review and customize your meal plan to suit your preferences.' },
              { step: 'Step 4: Shop', icon: 'fas fa-shopping-cart', description: 'Download your shopping list and easily purchase all the ingredients.' }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center md:text-left">
                <div className={`w-16 h-16 flex items-center justify-center rounded-full bg-${index % 2 === 0 ? 'blue' : 'green'}-100 mb-4`}>
                  <i className={`${item.icon} text-3xl text-${index % 2 === 0 ? 'blue' : 'green'}-600`}></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.step}</h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full bg-emerald-900 text-white py-12 shadow-lg">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Nutroscan Meal Plans</h3>
              <p className="text-white mb-4">AI-powered meal plans tailored to help manage your health condition with ease and precision.</p>
              <p className="text-white">© {new Date().getFullYear()} Nutroscan. All rights reserved.</p>
            </div>
            <div className="justify-self-end">
              <Image src={logoIcon} alt="Logo Icon" className="w-32 h-32" />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
