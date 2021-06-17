import React, { useState, useEffect, useDebugValue } from 'react';

//apenas para passar valores no console do react developer tools
function UseDebugValue() {
  const [loading, response] = useFetch('https://api.github.com/users/felipessac')

  if (loading) {
    return <h1>loading...</h1>
  }

  return (
    <div>
      <h1>UseDebugValue</h1>
      {JSON.stringify(response)}
    </div>
  );
}

function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await fetch(url);
      const json = await resp.json();

      setLoading(false);
      setResponse({ json, status: resp.status });
    })();
  }, [url]);

  useDebugValue(response?.status, (message) => {
    return `status: ${message}`;
  });

  return [loading, response];
}

export default UseDebugValue;