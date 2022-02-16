import { Fragment } from "react";
import Footer from "./footer";
import MainHeader from "./main-header";

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
