import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { Mail, Github, Linkedin } from "lucide-react";


export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_66ide1y',     // Replace with your EmailJS Service ID
      'template_9azikwo',    // Replace with your EmailJS Template ID
      form.current,
      'YAdqeHqC0748aTAux'      // Replace with your EmailJS Public Key
    ).then((result) => {
      setStatus('Message sent successfully!');
      console.log(result.text);
    }).catch((error) => {
      setStatus('Failed to send message.');
      console.error(error.text);
    });

    e.target.reset();
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 fade-in">Get in Touch</h2>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 fade-in">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a href="mailto:kipkiruidennis25@gmail.com" className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition-colors">
                  <Mail className="w-6 h-6" />
                  <span>kipkiruidennis25@gmail.com</span>
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition-colors">
                  <Github className="w-6 h-6" />
                  <span>GitHub Profile</span>
                </a>
                <a href="https://www.linkedin.com/in/dennis-kipkurui-40b3122a4/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition-colors">
                  <Linkedin className="w-6 h-6" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
                {status && <p className="text-center text-sm mt-4">{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
