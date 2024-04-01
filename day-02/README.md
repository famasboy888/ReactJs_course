# Using of Props

You can pass parameters to another component by adding attributes:
`<BlogList blogs={blogs} title="All Blogs!"/>`

Your components recieve `props` then you can destructure them:
```bash
const BlogList = (props) => {
    const { blogs } = props;
    const { title } = props;

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
```

<hr>

You can use `filter()` to filter items from objects you want to retrieve.

It only returns the items that meets a true condition.

`<BlogList blogs={blogs.filter((blog) => (blog.author === "mario"))} title="Yoshi's Blogs!" />`

We see the condition `blog.author === "mario"`. So, it will only return data that has an author of `mario`.

