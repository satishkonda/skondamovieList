import React, {useState} from 'react';
import Search from './components/Search';

function App() {
  const apiUrl = "http://localhost:3000/movies";
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });

  const search = (e) => {
    if(e.key === "Enter"){
      console.log('Fired on enter key');
    }
  }

  const handleInput = (e) => {
    let s = e.target.value;
    setState(prevState =>{
      return {...prevState, s:s}
    });
    console.log(state.s);
  }
  return (
    <div className="App">
      <header>
       <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput}/>
      </main>
    </div>
  );
}

export default App;
