import { Link, useRouteError } from "react-router-dom";
interface RouteError {
  status?: number;
  message?: string;
}
const Error = () => {
  const error = useRouteError() as RouteError;
  console.log(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      {error && error.status === 404 ? (
        <>
          <h3 className="text-2xl font-bold text-red-600">Oh no!</h3>
          <p className="text-lg text-gray-700">
            We can't seem to find the page you are looking for.
          </p>
          <Link
            to="/"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Back Home
          </Link>
        </>
      ) : (
        <>
          <h3 className="text-2xl font-bold text-red-600">
            Something went wrong
          </h3>
          <p className="text-lg text-gray-700">
            An unexpected error has occurred.
          </p>
          <Link
            to="/"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Back Home
          </Link>
        </>
      )}
    </div>
  );
};

export default Error;
