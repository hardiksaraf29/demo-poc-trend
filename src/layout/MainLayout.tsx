import React from "react";
import Footer from "./Footer";
import Header from "./Header";
const MainLayout = (props: any) => {
  const { children } = props;
  return (
    <main>
      <Header />
      {children}
     
      <Footer />
    </main>
  );
};

export default MainLayout;
