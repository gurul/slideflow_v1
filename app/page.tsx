"use client"; // Indicates that this component should be rendered on the client-side in a Next.js app

import Header from "@/app/header"; // Importing the Header component from the app directory
import Popup from '@/app/popup'; // Importing the Popup component from the app directory
import BrowserBlue from '@/assets/BrowserBlue.png'; // Importing the BrowserBlue image asset
import BrowserWhite from '@/assets/BrowserWhite.png'; // Importing the BrowserWhite image asset
import Image from 'next/image'; // Importing the Image component from Next.js for optimized image loading
import { useState } from 'react'; // Importing useState hook from React for state management

// Main functional component for the Home page
export default function Home() {
  // State to control the visibility of the popup
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Function to show the popup
  const showPopup = () => setIsPopupVisible(true);
  
  // Function to hide the popup
  const hidePopup = () => setIsPopupVisible(false);

  return (
    // Main container for the Home page with a white background and full-screen height
    <main className="flex min-h-screen flex-col bg-white">
      {/* Header component with a function to show the popup on sign-up click */}
      <Header onSignUpClick={showPopup} />
      {/* Title of the page */}
      <title>SlideFlow</title>
      <div className="flex flex-1 items-center justify-between p-12">
        <div className="flex flex-col items-start text-left w-4/4">
          {/* Main heading of the page */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#156095] mb-4">
            Practice Presenting.
          </h2>
          {/* Description text */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 mb-4">
            Transform your presentation prep with ease.
          </p>
          {/* Button to start presenting, which triggers the popup */}
          <button
            className="px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg md:text-xl bg-white text-[#156095] border-2 border-[#156095] rounded-3xl hover:bg-[#156095] hover:text-white"
            onClick={showPopup}
          >
            Start Presenting
          </button>
          <div className="mt-8 relative w-full max-w-[600px] h-[400px]">
            {/* Overlay images with BrowserWhite on top of BrowserBlue */}
            <Image
              src={BrowserWhite}
              alt="Browser 2"
              layout="fill"
              objectFit="contain"
              className="absolute right-0 top-0"
            />
            <Image
              src={BrowserBlue}
              alt="Browser 1"
              layout="fill"
              objectFit="contain"
              className="absolute left-0 top-0"
            />
          </div>
        </div>
      </div>
      {/* Popup component that appears when isPopupVisible is true */}
      <Popup isVisible={isPopupVisible} onClose={hidePopup} />
    </main>
  );
}