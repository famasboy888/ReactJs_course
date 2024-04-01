# Re-using custom hooks to retrieve data

In `BlogDetails.js` we import our custom hook `useFetch()`.

Then we pass the Rest API link inside the `useFetch()` + `id` to be fetched.

Then, we do the same conditional rendering below.

```bash
 const { data: blog, isPending, error } = useFetch("http://localhost:8000/blogs/" + id);

    return (
        <div className="blog-details">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
        </div>
    );
```



