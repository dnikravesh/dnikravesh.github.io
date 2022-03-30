import * as React from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';

import { Link } from '@/components/common';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Danny Nikravesh</title>
        <meta content='initial-scale=1.0, width=device-width' name='viewport' />
      </Head>
      <main>
        <header>
          <h1>Danny Nikravesh</h1>
          <p>Web Developer</p>
        </header>
        <p>
          Front End Engineer <Link href='https://www.delicious-simplicity.com/'>@[DS]</Link>
        </p>
        <hr />
        <p>
          Web Developer &amp; Unofficial Recipe Taster <Link href='https://lindseyeatsla.com/'>@LindseyEats</Link>
        </p>
        <hr />
        <p>
          Message me on <Link href='https://github.com/dsdannynikravesh'>Github</Link>
        </p>
      </main>
    </>
  );
};

export default Home;
