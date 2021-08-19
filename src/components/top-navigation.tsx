import React from 'react';
import { Link } from 'components/link';

export function TopNavigation() {
  return (
    <nav className="sticky w-full z-10 top-0 bg-white">
      <div className="w-full container max-w-screen-xl  mx-auto flex flex-wrap justify-center mt-0 py-4 px-4">
        <Link path="/" type="External URL">
          <a className="text-gray-700 text-lg">
            <img src="/image/spreadshop_logo.svg" className="w-60" />
          </a>
        </Link>
      </div>
      <div className="w-full h-px bg-gray-300"></div>
    </nav>
  );
}
