export default function SeoContent() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8 w-full">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 text-left">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          How to Calculate Your Freelance Hourly Rate
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Setting the right hourly rate is one of the most important — and most
          stressful — decisions a freelancer makes. Charge too little and you
          burn out without meeting your financial goals. Charge too much without
          justification and you lose clients. The good news: there's a clear
          formula, and this calculator does the math for you.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          The Basic Formula
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          Your minimum viable hourly rate is calculated by dividing your total
          annual financial need — salary plus business expenses — by the number
          of hours you can realistically bill in a year. That means accounting
          for weekends, public holidays, vacation days, sick days, and the
          non-billable hours spent on admin, marketing, and client calls.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 text-sm text-blue-800 font-mono">
          Hourly Rate = (Annual Salary + Annual Expenses) ÷ Billable Hours Per Year
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Why You Must Account for Taxes and Expenses
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          As a freelancer, you're running a business. Unlike a salaried employee,
          no one withholds your taxes — that responsibility is entirely yours.
          Self-employment tax alone (Social Security + Medicare) runs around
          15.3% in the US on top of income tax. Factor in health insurance,
          retirement contributions, software subscriptions, hardware, accounting
          fees, and professional development, and your real costs add up fast.
          If you don't build these into your rate, you'll end the year earning
          far less than you expected.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          A good rule of thumb: add 25–30% to your desired take-home salary to
          cover taxes, then add your hard business expenses on top. The
          "Annual Business Expenses" field in the calculator handles the
          latter — enter an honest estimate.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          How to Use This Calculator
        </h3>
        <ol className="list-decimal list-inside text-gray-600 leading-relaxed space-y-2 mb-6">
          <li>
            <strong>Desired Annual Salary:</strong> Enter the net income you want
            to take home after paying yourself.
          </li>
          <li>
            <strong>Business Expenses:</strong> Add up your annual costs — tools,
            software, insurance, professional services.
          </li>
          <li>
            <strong>Days Off:</strong> Count every day you won't work — weekends
            (104 days), public holidays (~10), vacation (15+), and sick days.
          </li>
          <li>
            <strong>Billable Hours Per Day:</strong> Be realistic. Most
            freelancers bill 4–6 hours on a productive 8-hour day.
          </li>
        </ol>
        <p className="text-gray-600 leading-relaxed mb-6">
          The calculator returns your minimum rates. Think of these as your
          floor, not your ceiling. Once you know your floor, you can add a
          profit margin (typically 10–20%) for business growth, savings, and
          unexpected slow periods.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Should You Charge More Than the Minimum?
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Yes — in most cases. Your rate is also a signal of value. Experienced
          freelancers in high-demand niches (software development, UX design,
          copywriting, consulting) routinely charge 1.5× to 3× the bare minimum
          because their expertise commands a premium. Use this calculator to
          understand your baseline, then research market rates in your industry
          and adjust accordingly. Tools like LinkedIn Salary, Glassdoor, and
          freelancer community surveys are great references for competitive
          positioning.
        </p>
      </div>
    </section>
  );
}
