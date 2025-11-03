const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-12 py-5 bg-white border-b border-gray-200 shadow-md rounded-b-2xl">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <span className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Home Plate
        </span>
        <span className="text-3xl font-semibold text-orange-600 sm:text-4xl">
          Helper
        </span>
      </div>

      {/* Navigation Menu */}
      <nav>
        <ul className="flex space-x-10 text-lg font-medium text-gray-700">
          <li className="hover:text-orange-600 cursor-pointer transition duration-200">
            South Indian
          </li>
          <li className="hover:text-orange-600 cursor-pointer transition duration-200">
            North Indian
          </li>
          <li className="hover:text-orange-600 cursor-pointer transition duration-200">
            Continental
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
