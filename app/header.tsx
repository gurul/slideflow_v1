import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full p-6 bg-white shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-700">SlideFlow</h1>
      <nav className="flex space-x-4">
        <Link href="#" legacyBehavior>
          <a className="text-gray-700">About</a>
        </Link>
        <Link href="#" legacyBehavior>
          <a className="text-gray-700">Sign In</a>
        </Link>
        <Link href="#" legacyBehavior>
          <a className="px-4 py-2 bg-blue-700 text-white rounded-lg">Sign Up</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;