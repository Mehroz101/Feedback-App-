const NotFound = () => {
  return (
    <div className="flex flex-column w-full h-screen justify-content-center align-items-center">
      <h1 className="text-5xl text-red-600">404 - Not Found</h1>
      <p className="text-lg text-gray-600">
        The page you're looking for doesn't exist or you don't have access.
      </p>
    </div>
  );
};

export default NotFound;
