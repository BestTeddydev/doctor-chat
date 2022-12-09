import React from "react";
import Footer from "./footer";
import Header from "./header";

function MainLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
}

export default MainLayout;
