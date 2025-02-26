import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 fade-in">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          
          {/* Incident Report System */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105 fade-in">
            <img 
              src="https://plus.unsplash.com/premium_photo-1663126578157-7f3e312c0f19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxpbmNpZGVudCUyMHJlc3BvbnNlfGVufDB8fDB8fHww"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">Incident Report System</h3>
              <p className="text-gray-600">
                A web-based system for reporting workplace incidents, improving safety, and tracking reports.
              </p>
            </div>
          </div>

          {/* Hospital Management System */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105 fade-in">
            <img 
              src="https://media.istockphoto.com/id/2153813386/photo/hospital-teamwork-and-doctors-with-folder-tablet-and-brainstorming-for-healthcare-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=l0MBHeoRSdW2QqYMyRCwS4JT6RdOlDDrdpnzu1uWZW8=" 
              alt="Hospital Management System" 
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">Hospital Management System</h3>
              <p className="text-gray-600">
                A complete digital solution for managing hospital records, patient appointments, and staff administration.
              </p>
            </div>
          </div>

          {/* Farm Management System */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105 fade-in">
            <img 
              src="https://plus.unsplash.com/premium_photo-1664299251919-4375a3291310?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxmYXJtJTIwbWFuYWdlbWVudCUyMHN5c3RlbXxlbnwwfHwwfHx8MA%3D%3D" 
              alt="Farm Management System" 
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">Farm Management System</h3>
              <p className="text-gray-600">
                A software tool that helps farmers track crops, monitor livestock, and manage farm resources efficiently.
              </p>
            </div>
          </div>

          {/* Personal Portfolio Website */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105 fade-in">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbmFsJTIwcG9ydGZvbGlvfGVufDB8fDB8fHww" 
              alt="Personal Portfolio" 
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">Personal Portfolio Website</h3>
              <p className="text-gray-600">
                A professional portfolio showcasing projects, skills, and experiences with an interactive design.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
