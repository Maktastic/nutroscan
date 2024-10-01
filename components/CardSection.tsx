import { motion } from 'framer-motion';
import Image from 'next/image';
import foodIcon from '@/public/assets/food_icon.svg';
import peachIcon from '@/public/assets/peach_icon.svg';
import calenderIcon from '@/public/assets/calender_icon.svg';
import clipboardIcon from '@/public/assets/clipboard_icon.svg';
import recycleIcon from '@/public/assets/recycle_icon.svg';
import checkmarkIcon from '@/public/assets/checkmark_icon.svg';

const CardSection = () => {
  const cardData = [
    { icon: foodIcon, title: 'Personalized Meal Plans', description: 'Every meal plan is tailored to your unique health conditions, dietary restrictions, and personal goals. Whether you\'re managing diabetes, looking to lose weight, or just want healthier meals, our AI-powered generator creates a plan just for you.' },
    { icon: peachIcon, title: 'Expert Nutritional Insights', description: 'Get more than just recipes—receive detailed nutritional information for every meal. Track your intake of calories, protein, fats, and carbs with ease, and stay on top of your health goals with science-backed recommendations.' },
    { icon: calenderIcon, title: 'Effortless Meal Planning', description: 'Say goodbye to the hassle of meal planning! With just a few clicks, we generate a weekly meal plan based on your preferences and health needs. Save time and energy while enjoying balanced, nutritious meals every day.' },
    { icon: clipboardIcon, title: 'Shopping List Generator', description: 'Simplify your grocery shopping with our automatic shopping list generator. Every meal plan comes with a ready-made shopping list, customized to match your chosen meals and local grocery store availability.' },
    { icon: recycleIcon, title: 'Flexible and Adaptable', description: 'Life changes, and so do your needs. Update your health conditions, dietary preferences, or goals at any time, and receive instant updates to your meal plans. Whether you\'re following a special diet or simply need variety, we’ve got you covered.' },
    { icon: checkmarkIcon, title: 'Trusted by Health Experts', description: 'Our meal plans are backed by the latest nutritional science and crafted with guidance from registered dietitians and health experts. Whether you\'re managing a condition or just focusing on your health, you can trust us to deliver quality advice.' }
  ];

  return (
    <section className="w-full h-screen flex gap-8 items-center justify-center bg-gray-800 flex-wrap text-black px-6 py-8 border-b border-emerald-400 max-sm:flex-col max-sm:h-auto">
      {cardData.map((card, index) => (
        <motion.div
          key={index}
          className="card p-8 w-1/4 h-[350px] flex flex-col justify-between gap-4 bg-gray-100 items-start rounded-lg shadow-lg max-sm:w-full max-sm:gap-3"
          initial={{ opacity: 0, y: 50 }} // Start slightly lower
          whileInView={{ opacity: 1, y: 0 }} // Smoothly fade and slide into view
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.15 }} // Custom easing for smoothness
          viewport={{ once: true, amount: 0.3 }} // Trigger when 30% visible
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
          style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)', willChange: 'transform' }}
        >
          <Image src={card.icon} alt={`${card.title} Icon`} className="w-16 h-16 rounded-lg max-sm:w-14 max-sm:h-auto" />
          <span className="text-xl font-bold text-center text-[#2F855A] max-sm:text-[15px]">{card.title}</span>
          <p className="text-md font-light leading-normal line-clamp-6 max-sm:text-sm max-sm:leading-6">{card.description}</p>
        </motion.div>
      ))}
    </section>
  );
};

export default CardSection;
