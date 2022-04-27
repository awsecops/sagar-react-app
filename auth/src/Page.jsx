import React from 'react';
//compnent render into page 
function Page({ title, children }) {

  return (
    <div>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}

export default Page;
