import React from 'react';

interface PaymentInfoProps {
  className?: string;
  compact?: boolean;
}

export const PaymentInfo: React.FC<PaymentInfoProps> = ({ className = '', compact = false }) => {
  if (compact) {
    return (
      <div className={`bg-blue-50 border-l-4 border-blue-400 rounded-lg p-4 ${className}`}>
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-3">
            <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="text-blue-800 font-semibold text-base mb-1">Payment Options Available</h4>
            <p className="text-blue-700 text-sm leading-relaxed">
              Please note there are different payment options available, such as Zelle, PayPal, ACH and check. 
              After you click 'Buy', select 'More Details' to view different payments information.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6 shadow-lg ${className}`}>
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-4">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center">
            <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
            Payment Options Available
          </h3>
          <p className="text-blue-700 font-medium text-base leading-relaxed">
            Please note there are different payment options available, such as <strong>Zelle, PayPal, ACH and check</strong>. 
            After you click <strong className="bg-yellow-200 px-1 rounded">'Buy'</strong>, select <strong className="bg-yellow-200 px-1 rounded">'More Details'</strong> to view different payments information.
          </p>
        </div>
      </div>
    </div>
  );
}; 