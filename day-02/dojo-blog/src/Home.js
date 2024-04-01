import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    // let fname = "John Cena"
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const [name, setName] = useState("Yoishii")

    const handleChangeName = (new_name) => {
        setName(new_name);
    }

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => (blog.id !== id));
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log("from useEffect");
        console.log(name);
    }, [name]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
            <BlogList blogs={blogs.filter((blog) => (blog.author === "mario"))} title="Yoshi's Blogs!" handleDelete={handleDelete} />
            <button onClick={() => (handleChangeName("wario"))}>Click</button>
            <p>{name}</p>
        </div>
    );
}

export default Home;