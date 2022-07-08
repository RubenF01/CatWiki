import { ReactNode } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Created by Ruben Frias" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
