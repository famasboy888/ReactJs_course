# Add redirect route after submit

Import `useHistory()` and store in variable:

`const history = useHistory();`

It can be called to `go()` 1 page before

Or `push()` to force redirect to a route

```bash
.then(() => {
    setIsPending(false);
    console.log("New Blog added");
    // history.go(-1);              <== goes back 1 page
    history.push("/");              <== force redirect
});
```



