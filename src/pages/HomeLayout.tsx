import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  const navigation = useNavigation();

  // Check if the page is loading based on the navigation state
  const isPageLoading = navigation.state === "loading";
  const value = "some value";

  return (
    <>
      <Navbar />

      <section className="animate-fadeIn">
        {isPageLoading ? (
          <div>Loading...</div> // Provide some loading indicator or message
        ) : (
          <Outlet context={{ value }} />
        )}
      </section>
    </>
  );
};

export default HomeLayout;
