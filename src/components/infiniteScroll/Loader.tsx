const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <svg
        className="animate-spin h-8 w-8"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <defs>
          <linearGradient
            id="deepBlueSkyBlueGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#1E3A8A", stopOpacity: 1 }} // Deep Blue
            />
            <stop
              offset="100%"
              style={{ stopColor: "#60A5FA", stopOpacity: 1 }} // Sky Blue
            />
          </linearGradient>
        </defs>
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="url(#deepBlueSkyBlueGradient)"
          strokeWidth="4"
          fill="none"
        />
      </svg>
      <p className="mt-2 text-gray-600">Loading more articles...</p>
    </div>
  );
};

export default Loader;
