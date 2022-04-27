import React from "react";
import {useStore } from "store-app/store";

function StoreReflatedTest() {
  const { user,count } = useStore();
  

  return (

    <div className="App">
      {user?<div>updated user name : {user.name}</div>:null}
      {count?<div>counter  : {count}</div>:null}
    </div>
    
  );
}

export default StoreReflatedTest;
