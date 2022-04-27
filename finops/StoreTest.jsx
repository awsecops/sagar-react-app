import React from "react";
import {useStore } from "store-app/store";

function StoreTest() {
  const { count, increment,user,saveUser } = useStore();
  const saveUserDetail=()=>{
    saveUser({name:'abc'});
  }

  return (

    <div className="App">
     
      <div>Functional component example</div>
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

export default StoreTest;
