import React from "react";
import styled from 'styled-components';

import Link from "next/link";
import Head from "next/head";

import withAnalytics from "~/hocs/withAnalytics";

const Title = styled.h1`
  color: #069;
  font-size: 40px;
`;

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Title>Hello World</Title>
    <img src="/static/keramon.jpg" alt="Keramon" />
    <Link href="/users">
      <a>Usuários</a>
    </Link>
  </>
);

export default withAnalytics()(Home);
