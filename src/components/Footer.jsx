import { Link } from 'react-router-dom';
import AdBanner from './AdBanner';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <AdBanner label="Advertisement Space" />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-4">
          <p className="text-xs text-gray-400 text-center">
            © {year} Freelance Hourly Rate Calculator — Free tool for independent
            professionals. All calculations are estimates for planning purposes only.
          </p>
          <Link
            to="/privacy-policy"
            className="text-xs text-blue-500 hover:text-blue-600 hover:underline whitespace-nowrap transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
