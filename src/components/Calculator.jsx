import { useState, useMemo, useEffect, useRef } from 'react';

const FIELD_CONFIG = [
  {
    id: 'annualSalary',
    label: 'Desired Annual Take-Home Salary',
    hint: 'How much do you want to earn after expenses?',
    prefix: '$',
    min: 10000,
    max: 500000,
    step: 1000,
    defaultValue: 80000,
  },
  {
    id: 'annualExpenses',
    label: 'Estimated Annual Business Expenses',
    hint: 'Software, hardware, insurance, accounting, etc.',
    prefix: '$',
    min: 0,
    max: 100000,
    step: 500,
    defaultValue: 5000,
  },
  {
    id: 'daysOff',
    label: 'Days Off Per Year',
    hint: 'Weekends, holidays, vacation, sick days.',
    prefix: null,
    suffix: 'days',
    min: 0,
    max: 200,
    step: 1,
    defaultValue: 115,
  },
  {
    id: 'billableHours',
    label: 'Billable Hours Per Day',
    hint: 'Admin, sales, and breaks eat into this — be realistic.',
    prefix: null,
    suffix: 'hrs',
    min: 1,
    max: 12,
    step: 0.5,
    defaultValue: 6,
  },
];

function formatCurrency(value) {
  if (!isFinite(value) || isNaN(value)) return '—';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function InputField({ config, value, onChange }) {
  const { id, label, hint, prefix, suffix, min, max, step } = config;
  const [inputText, setInputText] = useState(String(value));
  const isFocused = useRef(false);

  // When the slider moves, sync the text field (only if user isn't typing)
  useEffect(() => {
    if (!isFocused.current) {
      setInputText(String(value));
    }
  }, [value]);

  function handleTextChange(e) {
    const raw = e.target.value;
    setInputText(raw);
    const parsed = parseFloat(raw);
    if (!isNaN(parsed) && parsed >= 0) {
      onChange(id, parsed);
    }
  }

  function handleBlur() {
    isFocused.current = false;
    const parsed = parseFloat(inputText);
    const clamped = isNaN(parsed) ? min : Math.min(max, Math.max(min, parsed));
    setInputText(String(clamped));
    onChange(id, clamped);
  }

  function handleSlider(e) {
    onChange(id, parseFloat(e.target.value));
  }

  return (
    <div className="bg-gray-50 rounded-xl p-4 sm:p-5 border border-gray-200">
      <label className="block text-sm font-semibold text-gray-700 mb-0.5" htmlFor={id}>
        {label}
      </label>
      <p className="text-xs text-gray-400 mb-3">{hint}</p>

      <div className="flex items-center gap-2 mb-3">
        {prefix && (
          <span className="text-gray-500 font-medium text-lg select-none">{prefix}</span>
        )}
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={min}
          max={max}
          step={step}
          value={inputText}
          onChange={handleTextChange}
          onFocus={() => { isFocused.current = true; }}
          onBlur={handleBlur}
          className="w-full text-right text-xl font-bold text-gray-900 bg-white border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {suffix && (
          <span className="text-gray-500 font-medium text-base select-none whitespace-nowrap">
            {suffix}
          </span>
        )}
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleSlider}
        className="w-full h-2 rounded-full cursor-pointer"
        aria-label={`${label} slider`}
      />
      <div className="flex justify-between text-xs text-gray-400 mt-1">
        <span>
          {prefix}
          {min}
          {suffix ? ` ${suffix}` : ''}
        </span>
        <span>
          {prefix}
          {max.toLocaleString()}
          {suffix ? ` ${suffix}` : ''}
        </span>
      </div>
    </div>
  );
}

function ResultCard({ label, value, highlight = false }) {
  return (
    <div
      className={`rounded-xl p-4 sm:p-5 text-center border ${
        highlight
          ? 'bg-blue-600 border-blue-700 text-white'
          : 'bg-white border-gray-200 text-gray-800'
      }`}
    >
      <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${highlight ? 'text-blue-100' : 'text-gray-500'}`}>
        {label}
      </p>
      <p className={`text-3xl sm:text-4xl font-extrabold ${highlight ? 'text-white' : 'text-gray-900'}`}>
        {value}
      </p>
    </div>
  );
}

export default function Calculator() {
  const [values, setValues] = useState(() =>
    Object.fromEntries(FIELD_CONFIG.map((f) => [f.id, f.defaultValue]))
  );

  function handleChange(id, val) {
    setValues((prev) => ({ ...prev, [id]: val }));
  }

  const results = useMemo(() => {
    const { annualSalary, annualExpenses, daysOff, billableHours } = values;

    const workingDays = 365 - Math.max(0, daysOff);
    const totalHoursPerYear = workingDays * Math.max(0.5, billableHours);

    if (totalHoursPerYear <= 0) {
      return { hourly: NaN, daily: NaN, weekly: NaN };
    }

    const totalRequired = annualSalary + annualExpenses;
    const hourly = totalRequired / totalHoursPerYear;
    const daily = hourly * billableHours;
    const workingWeeks = workingDays / 5;
    const weekly = workingWeeks > 0 ? totalRequired / workingWeeks : NaN;

    return { hourly, daily, weekly };
  }, [values]);

  return (
    <section className="max-w-4xl mx-auto px-4 py-8 w-full">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
          <h2 className="text-white text-xl font-bold">Your Numbers</h2>
          <p className="text-blue-100 text-sm">Adjust the sliders or type directly — results update instantly.</p>
        </div>

        <div className="p-4 sm:p-6 grid gap-4 sm:grid-cols-2">
          {FIELD_CONFIG.map((config) => (
            <InputField
              key={config.id}
              config={config}
              value={values[config.id]}
              onChange={handleChange}
            />
          ))}
        </div>

        <div className="px-4 sm:px-6 pb-6">
          <div className="border-t border-gray-100 pt-5 mb-4">
            <h3 className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
              Your Required Rates
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <ResultCard label="Hourly Rate" value={formatCurrency(results.hourly)} highlight />
              <ResultCard label="Daily Rate" value={formatCurrency(results.daily)} />
              <ResultCard label="Weekly Rate" value={formatCurrency(results.weekly)} />
            </div>
          </div>

          <p className="text-center text-xs text-gray-400 mt-2">
            These are the <strong>minimum</strong> rates you need to charge. Add a profit margin on top for growth.
          </p>
        </div>
      </div>
    </section>
  );
}
