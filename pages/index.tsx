import type { ReactElement } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';

import astromech from '../lib/cards/astromech.json';
import { parseData } from '../lib/parsetriggers';

const Home = () => {
  return (
    <main>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
        {/* Replace with your content */}
        <button
          className="bg-neutral-200 text-xl p-4 rounded"
          onClick={() => parseData(astromech)}
        >
          PARSE ME
        </button>
        <div className="px-4 py-8 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
        </div>
        {/* /End replace */}
      </div>
    </main>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;