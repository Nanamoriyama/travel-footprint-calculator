import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  const navigation = useNavigation();

  const isPageLoading = navigation.state === "loading";
  const value = "some value";
  return (
    <>
      <div className="flex justify-end">
        <Navbar />
      </div>
      <div className="flex justify-center mt-2">
        <h1 className="mb-10 mt-20">Travel Footprint Calculator</h1>
      </div>
      <section className="mt-4 animate-fadeIn">
        {isPageLoading ? <div className="" /> : <Outlet context={{ value }} />}
      </section>
    </>
  );
};
export default HomeLayout;
