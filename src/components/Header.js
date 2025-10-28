import React from 'react';

function Header() {
  return (
    <header className="bg-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-4xl md:text-5xl font-light text-cf-dark-gray">
            Bad gateway
          </h1>
          <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded text-sm font-medium">
            Error code 502
          </span>
        </div>
        <div className="text-cf-gray">
          <span>Visit </span>
          <a 
            href="https://cloudflare.com" 
            className="text-cf-blue hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            cloudflare.com
          </a>
          <span> for more information.</span>
        </div>
        <div className="text-cf-gray text-sm mt-2">
          2025-10-28 11:18:39 UTC
        </div>
      </div>
    </header>
  );
}

export default Header;