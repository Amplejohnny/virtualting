

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-80 z-50 flex items-center justify-center">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin"></div>
        {/* Inner ring */}
        <div className="w-12 h-12 border-4 border-blue-500 rounded-full animate-spin absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        {/* Center dot */}
        <div className="w-4 h-4 bg-blue-700 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );
}
