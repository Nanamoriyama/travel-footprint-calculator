import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  const navigation = useNavigation();

  // Check if the page is loading based on the navigation state
  const isPageLoading = navigation.state === "loading";
  const value = "some value";

  return (
    <>
      <div className="flex justify-center">
        <Navbar />
      </div>

      <section className="mt-6 animate-fadeIn">
        {isPageLoading ? <div className="" /> : <Outlet context={{ value }} />}
      </section>
    </>
  );
};

export default HomeLayout;
