import Head from "next/head";
import { Button } from "antd";
import Header from "../components/Header";
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hello</title>
      </Head>
      <Header />
    </div>
  );
}
