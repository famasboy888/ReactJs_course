# Using React Router

Install react router `npm install react-router-dom@5`

Import react router in main `App.js` file

`import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'`

Wrap the whole App component with the `<Router>`.

```bash
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/create">
              <Create></Create>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
```

The `<Switch>` allows selection of `<Route>`. If it matches the route, then it will load the component below it. Just like a **switch case**.

Then add `exact` attribute to match exact routing.

`<Route exact path="/">`



