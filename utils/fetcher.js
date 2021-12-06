const fetcher = async (url, token) => {
    const res = await fetch(url, {
      method: 'GET',
      headers: new Headers({ 'Content-Type': 'application/json', token }),
      credentials: 'same-origin'
    });
  console.log("fetcher");
    return res.json();
  };
  
  export default fetcher;
  