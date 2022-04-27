import React from "react";
import {useStore } from "./store";

function App() {
  const { count, increment,user,saveUser } = useStore();
  const saveUserDetail=()=>{
    saveUser({name:'abc'});
  }

  return (

    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>Name: host</div>
      <div>Count: {count}</div>
      <div>
        <button
          onClick={increment}
          className="bg-indigo-800 text-white font-bold py-2 px-4 rounded"
        >
          Add To Cart
        </button>
        <button
          onClick={saveUserDetail}
          className="bg-indigo-800 text-white font-bold py-2 px-4 rounded"
        >
          Save user detail
        </button>
      </div>
      {user?<div>user Name : {user.name}</div>:null}
    </div>
    
  );
}

export default App;
