import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = "Welcome to new Blog"
  const likes = 50

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
