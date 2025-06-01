'use client';

import { useState } from 'react';
import { PageLayout } from '../../components/ui/PageLayout';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    organization: '',
    phone: '',
    subject: 'Sponsorship Inquiry'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      // Submit to FormSpree (replace FORM_ID with your actual FormSpree form ID)
      const response = await fetch('https://formspree.io/f/FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({
          name: '',
          email: '',
          message: '',
          organization: '',
          phone: '',
          subject: 'Sponsorship Inquiry'
        });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
    }
  };

  return (
    <PageLayout>
      {/* Hero section */}
      <div className="relative bg-[#732424] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#732424] to-[#9E3030] opacity-90"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        
        <div className="relative container mx-auto px-4 py-28">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl leading-relaxed mb-6 max-w-2xl mx-auto">
              Have questions about sponsorship, tickets, or registration? We&apos;re here to help!
            </p>
          </div>
        </div>
        
        {/* Decorative wave divider */}
        <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 text-white fill-current">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
          </svg>
        </div>
      </div>

      {/* Contact form section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                
                {formStatus === 'success' ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <svg className="h-12 w-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent Successfully!</h3>
                    <p className="text-green-700">Thank you for reaching out to us. We&apos;ll get back to you shortly.</p>
                    <button 
                      onClick={() => setFormStatus('idle')} 
                      className="mt-6 px-6 py-2 bg-[#732424] text-white rounded-lg hover:bg-[#9E3030] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#732424] focus:border-[#732424] outline-none transition"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#732424] focus:border-[#732424] outline-none transition"
                          placeholder="Your email"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
                        <input
                          type="text"
                          id="organization"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#732424] focus:border-[#732424] outline-none transition"
                          placeholder="Your organization (if applicable)"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#732424] focus:border-[#732424] outline-none transition"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#732424] focus:border-[#732424] outline-none transition"
                        required
                      >
                        <option value="Sponsorship Inquiry">Sponsorship Inquiry</option>
                        <option value="Event Registration">Event Registration</option>
                        <option value="General Question">General Question</option>
                        <option value="Media Inquiry">Media Inquiry</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#732424] focus:border-[#732424] outline-none transition"
                        placeholder="Your message"
                        required
                      ></textarea>
                    </div>
                    
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className={`px-8 py-3 bg-[#732424] text-white font-semibold rounded-lg transition-colors ${
                          formStatus === 'submitting' ? 'opacity-75 cursor-not-allowed' : 'hover:bg-[#9E3030]'
                        }`}
                      >
                        {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                      </button>
                    </div>
                    
                    {formStatus === 'error' && (
                      <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg">
                        <p className="font-medium">There was an error sending your message. Please try again later.</p>
                      </div>
                    )}
                  </form>
                )}
              </div>
            </div>
            
            {/* Additional contact info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-1 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#732424]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600">
                  <a href="mailto:events@thekshatriyas.org" className="hover:text-[#732424]">events@thekshatriyas.org</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 