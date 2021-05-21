import React, { useState } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Results from './components/Results';
import Popup from './components/Popup';

function App() {
  const apiUrl = "http://localhost:3000/movies";
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });

  const search = (e) => {
    if (e.key === "Enter") {
      axios.get(apiUrl + '?Title=' + state.s).then(({ data }) => {
        setState(prevState => {
          return { ...prevState, results: data }
        })
      });
    }
  }

  const handleInput = (e) => {
    let s = e.target.value;
    setState(prevState => {
      return { ...prevState, s: s }
    });
  }

  const openPopup = (id) => {
    axios.get(apiUrl +"?imdbID="+ id).then(({data}) => {
      console.log('data',data);
      setState(prevState => {
        return {...prevState, selected: data[0]}
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return {...prevState, selected: {}}
    });
  }

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} openPopup={openPopup}/>
       {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} 
        closePopup={closePopup}/> : false}
      </main>
    </div>
  );
}

export default App;
