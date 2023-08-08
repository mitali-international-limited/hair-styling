import React from "react";
import Head from "next/head";

import Header from "../Header/header.component";
import Footer from "../Footer/footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>La Famaine Hair Solution</title>
        <meta
          name="description"
          content="Hony hut is for Honey, Pill, Liquid Shots, Condoms, Raw paper etc."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/honeyhut logo.png" />
      </Head>
      <main className="min-h-screen max-w-[1992px] mx-auto">
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
