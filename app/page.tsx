"use client";
import wandIcon from "@/public/assets/wand.svg";
import logoIcon from "@/public/assets/logo_green.svg";

import Image from "next/image";
import { useState } from "react";
import MealPlanModal from "@/components/Modal";
import GoogleTagManager from "@/components/GoogleTagManager";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import ScrollDownIcon from "@/components/ScrollDown";
import CardSection from "@/components/CardSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [userInput, setUserInput] = useState<string>("");
  const [mealPlan, setMealPlan] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleGenerateMealPlan = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (!userInput || userInput.length === 0) {
      toast.error("Please provide a health condition");
      return;
    }
    setLoading(true);
    toast.loading("Waiting...");
    try {
      const response = await fetch(
        "https://9e4cadb9-ddf1-48ed-8b4a-8de8333c943c.eu-central-1.cloud.genez.io",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ healthCondition: userInput }), // Send user input to the backend
        }
      );

      const data = await response.json();

      if (data.mealPlan) {
        toast.dismiss();
        delete data.mealPlan.isValid;
        setMealPlan(data.mealPlan);
        setIsModalOpen(true);
        toast.success("Meal plan generated successfully!");
      } else {
        toast.dismiss();
        toast.error("Error generating meal plan. Please try again.");
      }
    } catch (error) {
      toast.dismiss();
      console.error("Error generating meal plan:", error);
      toast.error("Error generating meal plan. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <GoogleTagManager />
      {/* Navbar */}

      <div className="fixed top-10 right-5 w-[250px] h-[54px] shadow-lg z-50 max-sm:hidden">
        <a
          href="https://www.producthunt.com/posts/nutroscan?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-nutroscan"
          target="_blank"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=497591&theme=light"
            alt="Nutroscan&#0032; - Custom&#0032;AI&#0032;Meal&#0032;Plans&#0032;for&#0032;Your&#0032;Health&#0032;🍽️ | Product Hunt"
            style={{ width: "250px", height: "54px" }}
            width="250"
            height="54"
          />
        </a>
      </div>

      {/* Main Content */}
      <div className="min-h-screen flex flex-col items-center flex-wrap relative">
        {/* Hero Section */}
        <section className="w-full h-screen relative bg-[url('/assets/background.jpg')] bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center text-center text-black px-6 z-10 border-b border-gray-300">
          <h1 className="max-sm:text-3xl text-5xl font-bold text-black mb-4 max-sm:flex max-sm:flex-col max-sm:items-center">
            <span className="bg-gradient-to-r p-4 text-white from-green-900 to-green-700 rounded-lg mr-2 max-sm:w-1/4 max-sm:mb-4">
              AI
            </span>
            Meal Plans for Disease Management
          </h1>
          <p className="max-sm:text-sm max-sm:mb-4 text-lg text-black mb-8">
            Get custom meal plans tailored to your specific health conditions
            and dietary preferences.
          </p>

          <motion.form
            onSubmit={handleGenerateMealPlan}
            initial={{ opacity: 0, y: 20 }} // Slide in with opacity
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-1/2 flex items-center relative max-sm:w-full"
          >
            <motion.input
              type="text"
              className="text-black rounded-lg px-4 py-2 border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition ease-in-out duration-500 max-sm:text-[12px]"
              placeholder="Enter your dietary needs or health condition"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              required
              whileFocus={{ scale: 1.05 }} // Slight scale on focus
              transition={{ duration: 0.3 }}
            />

            <Image
              src={wandIcon}
              alt="wand icon"
              className="w-12 h-full absolute top-0 right-0"
            />
          </motion.form>

          <div className="text-sm flex items-center gap-2 mt-4 max-sm:hidden">
            <div className="w-6 h-6 text-gray-500 rounded-full bg-emerald-50 flex justify-center items-center">
              <i className="fa-solid fa-info fa-xs" />
            </div>
            <p className="text-gray-500">
              Press Enter after typing in your health condition
            </p>
          </div>

          <div className="hidden max-sm:flex mt-4">
            {/* @ts-ignore */}
            <button
              className="rounded-full bg-emerald-300 px-3 py-2"
              // @ts-ignore
              onClick={(e) => handleGenerateMealPlan(e)}
            >
              <i className="fa fa-arrow-right text-emerald-800" />
            </button>
          </div>

          <ScrollDownIcon />
        </section>

        {/* Content Section */}

        <CardSection />

        {/* How It Works Section */}
        <section className="w-full h-screen flex flex-col shadow-lg justify-center gap-20 items-center text-black px-6 py-8 max-sm:gap-4 max-sm:h-auto max-sm:py-12">
          <div className="w-full h-50 flex flex-col gap-3 justify-center items-center p-4 max-sm:h-auto max-sm:p-2">
            <span className="text-4xl font-bold text-gray-100 max-sm:text-xl">
              How it works
            </span>
            <div className="w-14 bg-emerald-400 h-1 border-none"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left container max-sm:gap-8">
            {[
              {
                step: "Step 1: Input",
                icon: "fas fa-notes-medical",
                description:
                  "Enter your health details and dietary preferences to get started.",
              },
              {
                step: "Step 2: Generate",
                icon: "fas fa-brain",
                description:
                  "Our AI generates a personalized meal plan tailored to your condition.",
              },
              {
                step: "Step 3: Customize",
                icon: "fas fa-pencil-alt",
                description:
                  "Review and customize your meal plan to suit your preferences.",
              },
              {
                step: "Step 4: Shop",
                icon: "fas fa-shopping-cart",
                description:
                  "Download your shopping list and easily purchase all the ingredients.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center md:text-left"
              >
                <div
                  className={`animate-bounce w-16 h-16 flex items-center justify-center rounded-full bg-${
                    index % 2 === 0 ? "blue" : "green"
                  }-400 mb-4 max-sm:w-12 max-sm:h-12`}
                >
                  <i
                    className={`${item.icon} text-3xl text-${
                      index % 2 === 0 ? "blue" : "emerald"
                    }-600 max-sm:text-xl`}
                  ></i>
                </div>
                <h3 className="text-2xl text-gray-50 font-bold mb-4 max-sm:text-[15px]">
                  {item.step}
                </h3>
                <p className="text-gray-200 text-center max-sm:text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <MealPlanModal
        isModalOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mealPlan={mealPlan}
      />
    </>
  );
}
