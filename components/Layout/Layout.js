import Footer from "./Footer";
import MainNavigation from "./MainNavigation.js";

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main className="px-5">{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
