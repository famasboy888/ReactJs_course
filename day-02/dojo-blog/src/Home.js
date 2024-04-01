import { useState } from "react";

const Home = () => {
    // let fname = "John Cena"
    const [name, setName] = useState('John Cena');
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName("John Michael");
        setAge(age+1);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} yers old!</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default Home;