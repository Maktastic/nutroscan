import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Assuming you're using Next.js for image optimization

// Sample scroll down icon image
import scrollDown from '@/public/assets/scroll_down.svg'; // Replace with your image path

const ScrollDownIcon = () => {
  const [isVisible, setIsVisible] = useState(true); // Track visibility

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Hide the icon if scrolled more than 100px (adjust as necessary)
      if (scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='absolute flex justify-center items-center bottom-10 left-0 right-0'>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 20, 0] }} // Bouncing effect
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="flex justify-center items-center mt-4"
        style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }} // Control visibility
      >
        {/* Scroll down icon (use your image) */}
        <Image src={scrollDown} alt="scroll down" className="w-8 h-8" />
      </motion.div>
    </div>
  );
};

export default ScrollDownIcon;