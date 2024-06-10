import { useRouteError } from "react-router-dom";

interface RouteError {
  status?: number;
  message?: string;
}
const SinglePageError = () => {
  const error = useRouteError() as RouteError;
  return <h2>{error.message}</h2>;
};

export default SinglePageError;
