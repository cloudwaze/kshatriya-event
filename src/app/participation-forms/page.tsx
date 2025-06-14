'use client';

import Link from 'next/link';
import { PageLayout } from '../../components/ui/PageLayout';

export default function ParticipationFormsPage() {
  return (
    <PageLayout maxWidth="full">
      {/* Hero section */}
      <div className="relative bg-[#732424] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#732424] to-[#9E3030] opacity-90"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">Participation Forms</h1>
            <p className="text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              Register for various activities and competitions at the Kshatriya (KANA) National Event 2025.
              Complete the appropriate forms to showcase your talents and join in the communal activities.
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

      {/* Registration Forms Section */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Activity Registration Forms</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Complete the forms below to participate in various activities at the Kshatriya National Event.
                Each form has specific requirements and deadlines. Register early to secure your spot!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Creative Competition */}
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Creative Competition</h3>
                <p className="text-gray-700 text-center mb-4">Register for creative competitions and artistic events.</p>
                <a href="https://docs.google.com/forms/d/1YTUoK1GN2LgjCE1LcUEo43AulKhiH2mSJGrBUS3YV5I/edit" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-colors flex items-center gap-2">
                  <span>Registration Link</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Youth Sports */}
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Youth Sports</h3>
                <p className="text-gray-700 text-center mb-4">Sports registration for youth participants.</p>
                <a href="https://docs.google.com/forms/d/1Sq-7DEIzgQP7KWbUtR1Tk6KyAJAH5QjwQHkBq-Pz9KQ/edit" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-colors flex items-center gap-2">
                  <span>Registration Link</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Men's Sports */}
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Men's Sports</h3>
                <p className="text-gray-700 text-center mb-4">Sports registration for men participants.</p>
                <a href="https://docs.google.com/forms/d/1ChAyiEa9U-dmXju0diqu0CS5fqyL4IFWnY87L_epNeo/edit" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-colors flex items-center gap-2">
                  <span>Registration Link</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Women's Sports */}
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Women's Sports</h3>
                <p className="text-gray-700 text-center mb-4">Sports registration for women participants.</p>
                <a href="https://docs.google.com/forms/d/1yR670K78PBnLbnHZ8Bs2kpbSHCeBlwRfEAJCo7c-0MQ/edit" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-colors flex items-center gap-2">
                  <span>Registration Link</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Cultural Registration */}
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Cultural Registration</h3>
                <p className="text-gray-700 text-center mb-4">Sign up for cultural performances and activities.</p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeSNI5EelFv2qemtydRlaJ565ZlkzyjyakGq_dyX8vjWUx-rw/viewform?usp=send_form" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-colors flex items-center gap-2">
                  <span>Registration Link</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Souvenir Registration */}
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Souvenir Registration</h3>
                <p className="text-gray-700 text-center mb-4">Submit your content for inclusion in the event souvenir.</p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeu5qMwQHySVaCMx6ElZIQJtw00Sk-tF8htBJR62R1IMXcvyw/viewform?usp=sharing&ouid=112211780449580759872" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-colors flex items-center gap-2">
                  <span>Registration Link</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional information section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Important Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-4">Deadlines</h3>
                <ul className="text-left space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#732424] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Creative Competition: September 30</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#732424] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Youth Sports: August 31</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#732424] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Men's Sports: August 31</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#732424] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Women's Sports: August 31</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#732424] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Cultural Registration: August 31</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#732424] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Souvenir Registration: October 31</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-4">Requirements</h3>
                <ul className="text-left space-y-3">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-[#732424] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>All participants must be registered for main event</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-[#732424] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Age restrictions apply for certain activities</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-[#732424] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Additional documents may be required</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-10">
              {/* Link removed */}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 