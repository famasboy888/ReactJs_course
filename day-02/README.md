# Setting up 404 Not Found

We should set up something like a "Catch" for `<Switch>` in `App.js`.

We create a catch `<Route>` and the path is set to `*`.

This should be placed at the last bottom order among the other Route to avoid wrong routes.

```bash
 <Switch>
    <Route exact path="/">
        <Home></Home>
    </Route>
    <Route exact path="/create">
        <Create></Create>
    </Route>
    <Route exact path="/blogs/:id">
        <BlogDetails/>
    </Route>
    <Route path="*">                       <== this is for 404 Not Found Page
        <NotFound/>
    </Route>
</Switch>
```



