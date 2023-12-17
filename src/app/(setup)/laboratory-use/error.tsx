"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    const ddd = error.message;
    //console.error(ddd);
  }, [error]);

  //console.log("mensaje", error.name);

  return (
    <div className="min-h-screen">
      
      <div className="min-h-screen">
        <h2>Algo salio mal!</h2>
        <pre>{error.message}</pre>

        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Intenta de nuevo
        </button>
      </div>
    </div>
  );
}
