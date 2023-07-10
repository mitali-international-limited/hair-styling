import { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="px-4 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
      >
        Menu
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Option 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Option 2
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Option 3
          </a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
