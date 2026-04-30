export default function AdBanner({ label = 'Advertisement Space' }) {
  return (
    <div className="w-full bg-gray-100 border border-dashed border-gray-300 rounded-lg flex items-center justify-center py-6 my-4">
      <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}
