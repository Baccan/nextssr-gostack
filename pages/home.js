import React from "react";

import Link from "next/link";
import Head from "next/head";

import withAnalytics from "../src/hocs/withAnalytics";

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <h1>Hello World</h1>
    <img src="/static/keramon.jpg" alt="Keramon" />
    <Link href="/users">
      <a>Usuários</a>
    </Link>
  </>
);

export default withAnalytics()(Home);
