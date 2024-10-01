// components/PageWrapper.js
'use client'; // Required for Client Component

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  // Loading state for content
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a short loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Change duration as needed

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  // Animation for the page load
  const pageLoadAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  return (
    <>
      {isLoading ? (
        <div className='w-full h-screen flex justify-center items-center'>
            <span className="loader"></span>
        </div>
        
      ) : (
        <motion.div
          initial="hidden"
          animate={isLoading ? 'hidden' : 'visible'}
          variants={pageLoadAnimation}
          className='bg-gray-900'
        >
          {children}
        </motion.div>
      )}
    </>
  );
};

export default PageWrapper;
