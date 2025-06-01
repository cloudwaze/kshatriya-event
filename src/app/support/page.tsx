'use client';

import { useState } from 'react';
import { PageLayout } from '../../components/ui/PageLayout';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "When and where is the Kshatriya Event 2025 being held?",
    answer: "The Kshatriya Event 2025 will be held on December 20-21, 2025 at the Embassy Suites by Hilton Dallas-Frisco Hotel and Convention Center, located at 7600 John Q. Hammons Drive, Frisco, Texas, 75034, USA."
  },
  {
    question: "How do I register for the event?",
    answer: "You can register for the event by visiting our Registration page. Early bird registration offers discounted rates and is available until June 2025."
  },
  {
    question: "Is there a dress code for the events?",
    answer: "For the Banquet on December 20th, formal attire is recommended. For other events, business casual or traditional attire is appropriate."
  },
  {
    question: "Is there parking available at the venue?",
    answer: "Yes, the Embassy Suites by Hilton Dallas-Frisco Hotel offers both self-parking and valet services for attendees."
  },
  {
    question: "How can I become a sponsor?",
    answer: "Please visit our Sponsors page for information about sponsorship opportunities. You can also contact our sponsorship team directly at events@thekshatriyas.org."
  },
  {
    question: "Will there be vegetarian food options available?",
    answer: "Yes, we will have vegetarian options available at all meal functions. Please indicate your dietary preferences during registration."
  }
];

export default function SupportPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <PageLayout>
      <section className="py-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#732424]">Support & FAQ</h1>
        
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#732424]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#732424]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">For general inquiries</p>
            <a href="mailto:events@thekshatriyas.org" className="text-[#732424] font-medium hover:underline break-all">
              events@thekshatriyas.org
            </a>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#732424]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#732424]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-600 mb-4">Event Location</p>
            <a href="https://maps.google.com/?q=Embassy+Suites+by+Hilton+Dallas+Frisco+Hotel+Convention+Center" className="text-[#732424] font-medium hover:underline" target="_blank" rel="noopener noreferrer">
              Embassy Suites, Frisco
            </a>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          
          {/* Search */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search FAQs..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#732424]/20"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg
                className="absolute left-3 top-3.5 w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          
          {/* FAQ Accordion */}
          <div className="space-y-4">
            {filteredFAQs.length === 0 ? (
              <p className="text-center text-gray-500 py-8">No FAQs match your search. Please try another query.</p>
            ) : (
              filteredFAQs.map((faq, index) => (
                <div key={index} className="border rounded-lg overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 text-left"
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  >
                    <span className="font-medium text-lg">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-[#732424] transition-transform ${activeIndex === index ? 'transform rotate-180' : ''}`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeIndex === index && (
                    <div className="p-4 bg-gray-50 border-t">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
        
        {/* Still Have Questions */}
        <div className="bg-[#732424]/10 p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-3 text-[#732424]">Still Have Questions?</h3>
          <p className="text-gray-700 mb-6 max-w-md mx-auto">
            Can't find what you're looking for? Contact our support team for further assistance.
          </p>
          <a
            href="mailto:events@thekshatriyas.org"
            className="inline-block px-6 py-3 bg-[#732424] text-white font-medium rounded-lg hover:bg-[#5a1c1c] transition-colors"
          >
            Contact Support
          </a>
        </div>
      </section>
    </PageLayout>
  );
}