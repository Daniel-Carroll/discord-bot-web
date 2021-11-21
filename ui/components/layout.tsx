import React from "react";
import Footer from "./footer";
import Header from "./header";

//@ts-ignore
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}