import React from 'react';
import Link from 'next/link';

const SideNavBary = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-800 text-white w-64">
      <div className="flex items-center justify-center h-16 border-b border-gray-700">
        <h1 className="text-2xl font-semibold">Brand</h1>
      </div>
      <nav className="flex-grow p-4">
        <Link href="/">
          <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Home</a>
        </Link>
        <Link href="/about">
          <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">About</a>
        </Link>
        <Link href="/services">
          <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Services</a>
        </Link>
        <Link href="/contact">
          <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Contact</a>
        </Link>
      </nav>
    </div>
  );
};

export default SideNavBary;
