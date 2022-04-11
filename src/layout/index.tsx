import React from "react";
import Footer from "./Footer";
import Header from "./Header";


interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = (props: LayoutProps) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
