# Adding route parameters

1) We can add route parameters in `App.js`, in links using this:

`<Route exact path="/blogs/:id">`

2) Then, from `BlogsDetails.js` we can retrieve parameter value using import `useParams()`

```bash
 const {id} = useParams()                   <== id can be retrieved using useParams() from Link

    return ( 
        <div className="blog-details">
            <h2>Blog Details: {id}</h2>
        </div>
     );
```

3) We can display dynamic route that will accept parameters from `BlogList.js`

Take note that we are using tilde `\`\``

```bash
<div className="blog-preview" key={blog.id}>
    <Link to={`/blogs/${blog.id}`}>                      <<== we are using tilde then ${}
        <h2>{blog.title}</h2>
        <p>Written by: {blog.author}</p>
    </Link>
</div>
```



