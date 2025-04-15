'use client';

import { useState } from 'react';
import { PageLayout } from '../../components/ui/PageLayout';
import eventsData from '../../data/events.json';

interface Event {
  event_id: number;
  name: string;
  price: number;
}

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    selectedEvents: [] as number[],
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const events = eventsData as Event[];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleEventSelection = (eventId: number) => {
    setFormData((prev) => {
      const updatedSelectedEvents = prev.selectedEvents.includes(eventId)
        ? prev.selectedEvents.filter(id => id !== eventId)
        : [...prev.selectedEvents, eventId];
      
      return {
        ...prev,
        selectedEvents: updatedSelectedEvents,
      };
    });
  };
  
  const calculateTotal = () => {
    return formData.selectedEvents.reduce((total, eventId) => {
      const event = events.find(event => event.event_id === eventId);
      return total + (event?.price || 0);
    }, 0);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate API call delay
    setTimeout(() => {
      // In a real implementation, you would send this data to an email service
      // or store in localStorage/sessionStorage
      console.log('Registration submitted:', {
        ...formData,
        registrationDate: new Date().toISOString(),
        totalAmount: calculateTotal(),
      });
      
      setFormStatus('success');
    }, 1000);
  };
  
  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      selectedEvents: [],
    });
    setFormStatus('idle');
  };
  
  return (
    <PageLayout>
      {/* Hero section */}
      <div className="relative bg-[#732424] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#732424] to-[#9E3030] opacity-90"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        
        <div className="relative container mx-auto px-4 py-28">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">Event Registration</h1>
            <p className="text-xl leading-relaxed mb-6 max-w-2xl mx-auto">
              Register now to secure your spot at our cultural celebration!
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

      {/* Registration form section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {formStatus === 'success' ? (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8 md:p-12 text-center">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <svg className="h-12 w-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Registration Successful!</h3>
                    <p className="text-green-700 mb-4">
                      Thank you for registering for our event. We&apos;ve sent you a confirmation email with all the details.
                    </p>
                    <div className="mt-6">
                      <button 
                        onClick={resetForm} 
                        className="px-6 py-2 bg-[#732424] text-white rounded-lg hover:bg-[#9E3030] transition-colors"
                      >
                        Register for Another Event
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Register for Events</h2>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#732424] focus:border-[#732424] outline-none transition"
                          placeholder="Your first name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#732424] focus:border-[#732424] outline-none transition"
                          placeholder="Your last name"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#732424] focus:border-[#732424] outline-none transition"
                          placeholder="Your phone number"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Select Events *</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {events.map((event) => (
                          <div key={event.event_id} className="flex items-start">
                            <input
                              type="checkbox"
                              id={`event-${event.event_id}`}
                              checked={formData.selectedEvents.includes(event.event_id)}
                              onChange={() => handleEventSelection(event.event_id)}
                              className="mt-1 h-5 w-5 text-[#732424] rounded border-gray-300 focus:ring-[#732424]"
                            />
                            <label htmlFor={`event-${event.event_id}`} className="ml-3">
                              <span className="block text-sm font-medium text-gray-800">{event.name}</span>
                              <span className="block text-sm text-gray-500">₹{event.price.toLocaleString()}</span>
                            </label>
                          </div>
                        ))}
                      </div>
                      {formData.selectedEvents.length === 0 && (
                        <p className="text-sm text-red-500 mt-2">Please select at least one event.</p>
                      )}
                    </div>
                    
                    {formData.selectedEvents.length > 0 && (
                      <div className="mb-8 border-t border-gray-200 pt-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h3>
                        <ul className="space-y-2 mb-4">
                          {formData.selectedEvents.map(eventId => {
                            const event = events.find(e => e.event_id === eventId);
                            return event ? (
                              <li key={event.event_id} className="flex justify-between">
                                <span className="text-gray-700">{event.name}</span>
                                <span className="text-gray-900 font-medium">₹{event.price.toLocaleString()}</span>
                              </li>
                            ) : null;
                          })}
                          <li className="flex justify-between border-t border-gray-200 pt-2 mt-2">
                            <span className="text-gray-900 font-bold">Total</span>
                            <span className="text-[#732424] font-bold">₹{calculateTotal().toLocaleString()}</span>
                          </li>
                        </ul>
                        <p className="text-sm text-gray-600 italic">
                          * Payment will be collected at the venue. Please bring the confirmation email with you.
                        </p>
                      </div>
                    )}
                    
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        disabled={formStatus === 'submitting' || formData.selectedEvents.length === 0}
                        className={`px-8 py-3 bg-[#732424] text-white font-semibold rounded-lg transition-colors ${
                          formStatus === 'submitting' || formData.selectedEvents.length === 0 
                            ? 'opacity-75 cursor-not-allowed' 
                            : 'hover:bg-[#9E3030]'
                        }`}
                      >
                        {formStatus === 'submitting' ? 'Registering...' : 'Complete Registration'}
                      </button>
                    </div>
                    
                    {formStatus === 'error' && (
                      <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg">
                        <p className="font-medium">There was an error with your registration. Please try again later.</p>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            )}
            
            <div className="mt-12 bg-gray-50 rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
              <p className="text-gray-600 mb-4">
                If you have any questions or need assistance with registration, please contact us.
              </p>
              <a 
                href="mailto:registrations@kshatriya-event.org" 
                className="text-[#732424] font-medium hover:underline"
              >
                registrations@kshatriya-event.org
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 