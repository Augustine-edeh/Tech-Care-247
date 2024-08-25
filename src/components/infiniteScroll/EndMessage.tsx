const EndMessage = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <p className="text-gray-600 text-lg font-semibold">
        You&apos;ve reached the end of the news feed!
      </p>
      <p className="text-gray-500">No more articles to load.</p>
    </div>
  );
};

export default EndMessage;
