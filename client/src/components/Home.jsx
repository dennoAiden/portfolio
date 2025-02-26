import React from 'react';

export default function Home() {
  return (
    <header id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Hello, I'm Dennis Kipkurui
          </h1>
          <p className="text-3xl mb-8 text-blue-100">
            Full Stack Web Developer
          </p>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
            Transforming ideas into exceptional web experiences with modern technologies and creative solutions
          </p>
          <div className="flex gap-6 justify-center">
            <a href="#contact" className="bg-white text-blue-800 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105">
              Get in Touch
            </a>
            <a href="#projects" className="border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all transform hover:scale-105">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}