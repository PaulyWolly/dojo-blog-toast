/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

const useFetch = (url) => {

    // useState = React HOOK (1) of many
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

  // customer hooks start with 'use'
  useEffect(() => {

    const abortCont = new AbortController();

    setTimeout(() => {
      fetch (url, { signal: abortCont.signal })
        .then(res => {
        if (!res.ok) {
          throw Error('Could not fetch the data for that resource.')
        }
        return res.json();
      })
        .then(data => {
          setData(data);
          setIsPending(false);
          setError(null)
      })
        .catch(err => {
          if (err.name === 'AbortError') {
            console.log('fetch aborted')
          } else {
            setError(err.message)
            setIsPending(false)
          }

        })
    }, 1000);

      return () => abortCont.abort();

  }, [url]);

    return { data, isPending, Error }
}

export default useFetch;
