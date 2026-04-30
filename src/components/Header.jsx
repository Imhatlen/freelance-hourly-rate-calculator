export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-5 text-center">
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="text-2xl">💼</span>
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
            Free Tool
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
          Freelance Hourly Rate Calculator
        </h1>
        <p className="mt-2 text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
          Find out exactly what to charge clients — based on your salary goals,
          expenses, and real working hours.
        </p>
      </div>
    </header>
  );
}
