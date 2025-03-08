import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#D32F2F] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="flex space-x-4 mb-6">
              {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#FF5252] flex items-center justify-center hover:bg-white hover:text-[#D32F2F] transition-all duration-300"
                >
                  <span className="sr-only">{social}</span>
                  🌐
                </a>
              ))}
            </div>
            <div className="text-white/90">
              <h4 className="font-bold mb-2">Emergency Contact</h4>
              <p>T-Hub: 040-66396639</p>
              <p>Mobile: 09581474545</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Past Editions</h3>
            <ul className="space-y-2">
              {['2022', '2020', '2019', '2017'].map((year) => (
                <li key={year} className="hover:text-white/75 transition-colors">
                  <Link href="#">{year}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">PyCon India Editions</h3>
            <p className="text-sm mb-4">A Collective Effort Led by HydPy</p>
            <ul className="space-y-2">
              {['2023', '2018'].map((year) => (
                <li key={year} className="hover:text-white/75 transition-colors">
                  <Link href="#">{year}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-white/90">Copyright © 2025 PyConf Hyderabad</p>
        </div>
      </div>
    </footer>
  );
} 