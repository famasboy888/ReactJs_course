# Using Clean up hooks to avoid errors of immediate route switching

I dont really get this part but this is how it is implemented in `useFetch.js`:

```bash
useEffect(() => {
        const abortController = new AbortController();        <== You create an instance object of AbortController

        setTimeout(() => {
            fetch(url, { signal: abortController.signal })      <== You assign it as a signal
                .then((res) => {
                    if (!res.ok) {
                        throw Error('Could not fetch data');
                    }
                    return res.json();
                })
                .then((rec) => {
                    setData(rec);
                    setIsPending(false);
                    setError(null);
                })
                .catch((err) => {
                    if( err.name === "AbortError"){
                        console.log("fetch aborted");
                    }else{
                        setError(err.message);
                        setIsPending(false);
                    }
                });
        }, 1000)

        return () => { abortController.abort() }    <== You return an anonymous function call. Inside, you will call the abort().
    }, [url]);
```



