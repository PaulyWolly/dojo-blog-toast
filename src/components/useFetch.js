/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

const useFetch = (url) => {

    // useState = React HOOK (1) of many
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

  // customer hooks start with 'use'
  useEffect(() => {
    fetch (url)
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
        //console.log(err.message)
        setError(err.message)
        setIsPending(false)
      })

  }, [url]);

  return { data, isPending, error }

}

export default useFetch;
