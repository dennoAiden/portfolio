import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-lg mb-4">Let's create something amazing together</p>
          <p className="text-gray-400">© {new Date().getFullYear()} Dennis Kipkurui. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}