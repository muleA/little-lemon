const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">Page not found</h2>
        <p className="text-gray-600 mt-2">The page you're looking for doesn't exist.</p>
      </div>
    </div>
  );
};

export default PageNotFound;
