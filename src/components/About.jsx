import { Link } from 'react-router-dom';

function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="text-gray-600 leading-relaxed space-y-4">{children}</div>
    </div>
  );
}

function ExampleCard({ title, inputs, result, color = 'blue' }) {
  const colors = {
    blue: { border: 'border-blue-200', bg: 'bg-blue-50', badge: 'bg-blue-600', text: 'text-blue-700', label: 'text-blue-500' },
    green: { border: 'border-green-200', bg: 'bg-green-50', badge: 'bg-green-600', text: 'text-green-700', label: 'text-green-500' },
    purple: { border: 'border-purple-200', bg: 'bg-purple-50', badge: 'bg-purple-600', text: 'text-purple-700', label: 'text-purple-500' },
  };
  const c = colors[color];

  return (
    <div className={`rounded-xl border ${c.border} ${c.bg} p-5`}>
      <h3 className={`font-bold text-base ${c.text} mb-3`}>{title}</h3>
      <div className="space-y-1.5 mb-4">
        {inputs.map(([label, value]) => (
          <div key={label} className="flex justify-between text-sm">
            <span className="text-gray-500">{label}</span>
            <span className="font-medium text-gray-800">{value}</span>
          </div>
        ))}
      </div>
      <div className={`rounded-lg ${c.badge} px-4 py-2 text-center`}>
        <p className="text-white text-xs font-semibold uppercase tracking-widest mb-0.5">Minimum Hourly Rate</p>
        <p className="text-white text-2xl font-extrabold">{result}</p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-5">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 text-sm font-medium mb-3 transition-colors"
          >
            ← Back to Calculator
          </Link>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl">💼</span>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">Free Tool</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            About the Freelance Hourly Rate Calculator
          </h1>
          <p className="mt-2 text-gray-500 text-base sm:text-lg max-w-2xl">
            Everything you need to know about how the tool works and why it matters for your freelance business.
          </p>
        </div>
      </header>

      <main className="flex-1 w-full">
        <div className="max-w-4xl mx-auto px-4 py-10">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-10 text-left">

            <Section title="What is this tool?">
              <p>
                The Freelance Hourly Rate Calculator is a free tool that helps independent professionals —
                designers, developers, writers, consultants, marketers, and more — figure out exactly
                what to charge clients per hour.
              </p>
              <p>
                Most freelancers set their rates based on gut feeling, what competitors charge, or
                what a client seems willing to pay. The problem with all of these approaches is
                that none of them start with <strong className="text-gray-800">your actual financial needs</strong>.
                You could be charging $80/hr and still be losing money once taxes, expenses, and
                unpaid hours are factored in.
              </p>
              <p>
                This calculator fixes that. You enter four numbers that reflect your real situation,
                and it tells you the <strong className="text-gray-800">minimum rate you must charge</strong> just
                to hit your income goal — before you even think about profit.
              </p>
            </Section>

            <Section title="What is it used for?">
              <ul className="space-y-3">
                {[
                  ['Starting out', 'If you\'re new to freelancing and have no idea what to charge, this gives you a data-driven starting point instead of a guess.'],
                  ['Raising your rates', 'If your expenses or income goals have changed, recalculate to see what your new minimum should be before approaching clients.'],
                  ['Evaluating a project', 'Before accepting a fixed-price project, use your hourly rate to estimate whether the budget is realistic for the hours involved.'],
                  ['Planning your year', 'Adjust the days-off slider to model what happens to your rate if you take more vacation or work fewer hours per day.'],
                  ['Comparing full-time vs. freelance', 'See how much you need to charge as a freelancer to match what a salaried role would pay — accounting for the benefits and stability you give up.'],
                ].map(([title, desc]) => (
                  <li key={title} className="flex gap-3">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">✓</span>
                    <p><strong className="text-gray-800">{title}:</strong> {desc}</p>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="How does it work?">
              <p>The calculator uses a straightforward formula:</p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 font-mono text-sm text-gray-700 my-4">
                Hourly Rate = (Annual Salary + Annual Expenses) ÷ (Working Days × Billable Hours/Day)
              </div>
              <p>
                <strong className="text-gray-800">Working Days</strong> is calculated as 365 minus your days off —
                weekends, public holidays, vacation, and sick days. Most full-time freelancers end up
                with around 220–240 working days per year.
              </p>
              <p>
                <strong className="text-gray-800">Billable Hours</strong> are the hours you can actually invoice.
                In an 8-hour day, you might only bill 5–6 hours once you subtract admin tasks, emails,
                sales calls, and breaks. The calculator lets you set this honestly.
              </p>
              <p>
                The result is the <strong className="text-gray-800">floor</strong> — the rate below which you
                cannot go without falling short of your goals. From here, you add a profit margin
                (typically 10–20%) and adjust for your market and experience level.
              </p>
            </Section>

            <Section title="Real-world examples">
              <p>Here are three different freelancers using the tool to find their rates:</p>

              <div className="grid gap-4 sm:grid-cols-3 my-6">
                <ExampleCard
                  title="Junior Web Developer"
                  color="blue"
                  inputs={[
                    ['Desired salary', '$55,000'],
                    ['Business expenses', '$3,000'],
                    ['Days off', '115 days'],
                    ['Billable hrs/day', '6 hrs'],
                  ]}
                  result="$47/hr"
                />
                <ExampleCard
                  title="UX Designer"
                  color="green"
                  inputs={[
                    ['Desired salary', '$90,000'],
                    ['Business expenses', '$6,000'],
                    ['Days off', '130 days'],
                    ['Billable hrs/day', '5 hrs'],
                  ]}
                  result="$96/hr"
                />
                <ExampleCard
                  title="Business Consultant"
                  color="purple"
                  inputs={[
                    ['Desired salary', '$150,000'],
                    ['Business expenses', '$12,000'],
                    ['Days off', '115 days'],
                    ['Billable hrs/day', '4 hrs'],
                  ]}
                  result="$201/hr"
                />
              </div>

              <p>
                Notice how the consultant's rate looks high compared to the developer — but it's driven
                by fewer billable hours per day (consulting involves a lot of unpaid prep and admin) and
                a higher income goal. The calculator makes these trade-offs visible.
              </p>
            </Section>

            <Section title="Why should you use it?">
              <p>
                Undercharging is the most common financial mistake freelancers make — and it's usually
                invisible until the end of the year when the numbers don't add up. Here's why this
                calculator is worth using before you set any rate:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                {[
                  ['You account for real costs', 'Taxes, software, hardware, insurance, accounting fees — these are real business costs that eat into your income. The calculator builds them in.'],
                  ['You account for real hours', 'Not every hour of your day is billable. The tool forces you to be honest about how many hours you actually invoice versus how many you work.'],
                  ['You stop guessing', 'Instead of copying a competitor\'s rate or picking a round number, you have a figure grounded in your actual financial situation.'],
                  ['You can model scenarios', 'Want to take 3 weeks of vacation? See what that does to your rate. Thinking about cutting your hours? Adjust the slider and find out instantly.'],
                ].map(([title, desc]) => (
                  <div key={title} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <p className="font-semibold text-gray-800 mb-1">{title}</p>
                    <p className="text-sm text-gray-500">{desc}</p>
                  </div>
                ))}
              </div>
            </Section>

            <div className="mt-8 text-center">
              <Link
                to="/"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
              >
                Try the Calculator →
              </Link>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center">
          <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
            <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
            <Link to="/privacy-policy" className="hover:text-blue-500 transition-colors">Privacy Policy</Link>
            <span>© {new Date().getFullYear()} Freelance Hourly Rate Calculator</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
