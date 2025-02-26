import React from 'react';
import { Layout, Server, Database } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 fade-in">Services I Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow fade-in">
            <Layout className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Frontend Development</h3>
            <p className="text-gray-600">
              Creating responsive and interactive user interfaces using modern frameworks like React and Next.js
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow fade-in">
            <Server className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Backend Development</h3>
            <p className="text-gray-600">
              Building robust server-side applications and APIs using Node.js and Express
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow fade-in">
            <Database className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Database Design</h3>
            <p className="text-gray-600">
              Designing and implementing efficient database solutions with MongoDB and PostgreSQL
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}