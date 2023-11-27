import Footer from "./Footer";
import MainNavigation from "./MainNavigation.js";

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main className="px-5 md:px-32">{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
