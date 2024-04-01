# Delete Function

Delete function is just similar to post:

```bash
const handleDelete = () =>{
    fetch("http://localhost:8000/blogs/"+ blog.id, {
        method: "DELETE",  
    }).then(()=>{
        history.push("/");
    });
}
```



