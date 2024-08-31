"use client";

import Link from "next/link";

interface HeaderProps {
  onSignUpClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSignUpClick }) => {
  return (
    <header className="w-full p-6 bg-white shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold text-[#196095]">SlideFlow</h1>
      <nav className="flex space-x-4">
        <Link href="#" legacyBehavior>
          <a className="text-gray-700 py-2">About</a>
        </Link>
        <Link href="#" legacyBehavior>
          <a className="text-gray-700 py-2">Sign In</a>
        </Link>
        <button
          className="px-4 py-2 bg-[#196095] text-white rounded-3xl"
          onClick={onSignUpClick}
        >
          Sign Up
        </button>
      </nav>
    </header>
  );
};

export default Header;