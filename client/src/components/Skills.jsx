import React from 'react';
import { Code2, Globe, Database, Terminal, Palette, Cpu } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5/CSS3", "JavaScript (ES6+)"]
    },
    {
      title: "Backend Development",
      icon: <Terminal className="w-8 h-8 text-blue-600" />,
      skills: ["Node.js", "RESTful APIs", "Python"]
    },
    {
      title: "Database",
      icon: <Database className="w-8 h-8 text-blue-600" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL"]
    },
    {
      title: "Development Tools",
      icon: <Code2 className="w-8 h-8 text-blue-600" />,
      skills: ["Git", "Docker", "AWS", "Linux", "VS Code", "Postman"]
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="w-8 h-8 text-blue-600" />,
      skills: ["Figma", "Adobe XD", "Responsive Design", "UI Prototyping", "Wireframing"]
    },
    {
      title: "Other Skills",
      icon: <Cpu className="w-8 h-8 text-blue-600" />,
      skills: ["Agile/Scrum", "CI/CD", "Testing", "Performance Optimization", "SEO", "Technical Writing"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 fade-in">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all fade-in"
            >
              <div className="flex items-center gap-4 mb-6">
                {category.icon}
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}