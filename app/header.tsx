"use client"; // Indicates that this component should be rendered on the client-side in a Next.js app

import Link from "next/link"; // Importing Link component from Next.js for client-side navigation

// Defining the interface for the props that the Header component will receive
interface HeaderProps {
  onSignUpClick: () => void; // A function to handle the Sign Up button click
}

// Functional component Header which takes HeaderProps as props
const Header: React.FC<HeaderProps> = ({ onSignUpClick }) => {
  return (
    // The header element that contains the navigation bar
    <header className="w-full p-6 bg-white shadow-md flex justify-between items-center">
      {/* Header title */}
      <h1 className="text-2xl font-bold text-[#196095]">SlideFlow</h1>
      <nav className="flex space-x-4">
        {/* Navigation link for "About" section */}
        <Link href="#" legacyBehavior>
          <a className="text-gray-700 py-2">About</a>
        </Link>
        {/* Button to trigger the onSignUpClick function */}
        <button
          className="px-4 py-2 bg-[#196095] text-white rounded-3xl"
          onClick={onSignUpClick}
        >
          Log in with Google
        </button>
      </nav>
    </header>
  );
};

export default Header; // Exporting the Header component for use in other parts of the application