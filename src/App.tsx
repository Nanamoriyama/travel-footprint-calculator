import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomeLayout, Landing, Error, Result } from "./pages";
import SinglePageError from "./pages/SinglePageError";
import Navbar from "./components/Navbar";

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
    ],
  },
]);

const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-start min-h-screen mt-60">
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
