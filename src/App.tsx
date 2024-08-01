import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomeLayout, Landing, Error, Result, Impact, Balance } from "./pages";
import SinglePageError from "./pages/SinglePageError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
      },
      {
        path: "results",
        element: <Result />,
        errorElement: <SinglePageError />,
      },
      {
        path: "impact",
        element: <Impact />,
        errorElement: <SinglePageError />,
      },
      {
        path: "balance",
        element: <Balance />,
        errorElement: <SinglePageError />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
