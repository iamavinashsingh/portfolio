import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer";
import useLenis from "../../hooks/useLenis";

const Layout = () => {
  useLenis();

  return (
    <div className="relative w-full min-h-screen flex flex-col font-sans antialiased">
      <Navbar />
      <main className="flex-grow flex flex-col relative w-full">
        <Outlet />
      </main>
      <Footer />

      {/* Grid Overlay — subtle vertical guide lines */}
      <div className="grid-overlay px-6 md:px-10">
        <div className="grid-line" />
        <div className="grid-line hidden md:block" />
        <div className="grid-line" />
      </div>
    </div>
  );
};

export default Layout;
