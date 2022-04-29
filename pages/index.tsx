import type { ReactElement } from 'react';
import Layout from '../components/Layout';
import UploadForm from '../components/UploadForm';
import { useRouter } from 'next/router';
import { decodeURL } from '../lib/serializer';
const Home = () => {
  //initialize the router hook
  const router = useRouter();

  //get data from URL if it exists
  const list: any = router.query.list
    ? decodeURL(router.query.list)
    : undefined;

  return (
    <main>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
        {/* Replace with your content */}

        <div className="px-4 py-8 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
            {list ? <div>List Uploaded!</div> : <UploadForm />}
          </div>
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
