import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 fade-in">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center fade-in">
            <div>
              <img 
                src="https://res.cloudinary.com/dunesx5jj/image/upload/v1740496188/428f08be-cb94-437a-85d2-886d337173b3_hytamc.jpg" 
                alt="Professional headshot" 
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-6">
                I am a passionate Software Developer with a background in Electrical and 
                Electronics Engineering. My journey into software development began with 
                an interest in automation and evolved into a full-stack expertise in building 
                scalable, efficient, and user-friendly applications.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                I specialize in web development using HTML, CSS, JavaScript, Node.js, and SQL, 
                alongside strong problem-solving skills in Python and C++. With a keen eye for 
                design and optimization, I create seamless digital experiences that drive 
                innovation and efficiency.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">3+</div>
                  <div className="text-gray-600">Years Coding</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-gray-600">Projects Built</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">5+</div>
                  <div className="text-gray-600">Technologies Mastered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
