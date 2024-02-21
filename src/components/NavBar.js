import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white flex justify-between items-center py-2 px-4">
      <div className="text-lg font-bold">Hospital.CO</div>
      <div className="flex items-center">
        <div className="mr-2">John</div>
        <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center"> {/* Adjusted height */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 12a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M14.879 11.426A7.98 7.98 0 0016 8c0-4.418-3.582-8-8-8S0 3.582 0 8c0 2.012.748 3.858 2 5.304V15a1 1 0 001 1h4.25a2 2 0 103.5 0H17a1 1 0 001-1v-1.696A7.98 7.98 0 0014.879 11.426zM18 8c0 3.313-2.687 6-6 6a5.96 5.96 0 01-3.154-.896 1 1 0 10-1.692 1.07A7.974 7.974 0 0012 16c4.418 0 8-3.582 8-8a7.975 7.975 0 00-1.154-4.113 1 1 0 101.854.226A9.975 9.975 0 0118 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
