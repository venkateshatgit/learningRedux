import './App.css';
import Counter from './components/counter';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <h1>In App Component</h1>
      <Header/>
      <Counter/>
    </div>
  );
}

export default App;
