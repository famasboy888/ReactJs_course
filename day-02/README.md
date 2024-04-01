# Using Link instead of href

We use `<Link>` to enable reactive loading of route pages

`import { Link } from "react-router-dom";`

Wrap the whole App component with the `<Router>`.

```bash
<div className="links">
    <Link to="/">Home</Link>
    <Link to="/create">New Blog</Link>
</div>
```



