function Loading() {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-blue-600"></div>
      <span className="ml-3 text-blue-600 font-medium">Loading...</span>
    </div>
  );
}

export default Loading;
