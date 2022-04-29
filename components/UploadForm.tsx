import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { encodeURL } from '../lib/serializer';
import { validateXWS } from '../lib/helpers';

export default function UploadForm() {
  //state variables
  const [xws, setXws] = useState('');
  const [error, setError] = useState();

  //initialize the router hook
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // validate JSON
    const validated = validateXWS(xws);

    // if JSON isn't valid, throw an error
    if (!validated) {
      setError('❌ Invalid XWS.  please try uploading again. ');
      return;
    }

    // encode JSON to url friendly format
    const encoded = encodeURL(validated);

    //redirect users to url for additional processing
    router.push(`/?list=${encoded}`);
  };

  return (
    <div className="flex items-start space-x-4">
      <div className="min-w-0 flex-1">
        <form onSubmit={handleSubmit} className="relative">
          <div
            className={
              error
                ? ' border-red-500 border-2 rounded-lg shadow-sm overflow-hidden focus-within:border-red-500 focus-within:ring-1 focus-within:ring-red-500'
                : 'border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500'
            }
          >
            <label htmlFor="upload" className="sr-only">
              Upload XWS here
            </label>
            <textarea
              value={xws}
              rows={3}
              name="upload"
              id="upload"
              className="block w-full py-3 border-0 resize-none focus:ring-0 sm:text-sm"
              placeholder="Paste XWS here..."
              onChange={(e) => {
                setXws(e.target.value);
                //remove error messages when user changes input
                if (error) {
                  setError(undefined);
                }
              }}
            />

            {/* Spacer element to match the height of the toolbar */}
            <div className="py-2" aria-hidden="true">
              {/* Matches height of button in toolbar (1px border + 36px content height) */}
              <div className="py-px">
                <div className="h-9" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 inset-x-0 pl-3 pr-2 py-2 flex justify-between">
            <div className="flex items-center ">
              <div className="flex items-center"></div>
            </div>
            <div className="flex-shrink-0">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Upload
              </button>
            </div>
          </div>
        </form>
        {error ? <p className="text-red-500 font-semibold">{error} </p> : null}
      </div>
    </div>
  );
}
