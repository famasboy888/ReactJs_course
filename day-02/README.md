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

