import { Fragment } from "react";
import ScrollToTopButton from "../ScrollToTop/ScrollToTop";
import Footer from "./Footer";
import MainHeader from "./MainHeader";

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      <ScrollToTopButton />
      <Footer />
    </Fragment>
  );
};

export default Layout;
