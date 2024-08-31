"use client";

import Header from "@/app/header";
import Popup from '@/app/popup';
import { useState } from 'react';

export default function Home() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const showPopup = () => setIsPopupVisible(true);
  const hidePopup = () => setIsPopupVisible(false);

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header onSignUpClick={showPopup} />
      <title>SlideFlow</title>
      <div className="flex flex-1 items-center justify-between p-12">
        <div className="flex flex-col items-start text-left w-4/4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#156095] mb-4">
            SlideFlow
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 mb-4">
            Transform your presentation prep with ease.
          </p>
          <button
            className="px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg md:text-xl bg-white text-[#156095] border-2 border-[#156095] rounded-3xl hover:bg-[#156095] hover:text-white"
            onClick={showPopup}
          >
            Start Presenting
          </button>
        </div>
      </div>
      <Popup isVisible={isPopupVisible} onClose={hidePopup} />
    </main>
  );
}