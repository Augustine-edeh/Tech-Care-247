const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <svg
        className="animate-spin h-8 w-8 text-blue-600"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
        />
      </svg>
      <p className="mt-2 text-gray-600">Loading more articles...</p>
    </div>
  );
};

export default Loader;
