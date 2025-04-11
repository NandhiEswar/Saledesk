import './App.css';
import Main from './Main/Main';
import Navbar from './Navbar/Navbar';
import Third from './Third/Third';
import Second from './Second/Second';
import Home from './Home/Home';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Third />
      <Second />
      <Home/>
    </div>
  );
}

export default App;
