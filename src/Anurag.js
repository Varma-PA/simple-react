import React, { Component } from "react";

function Anurag() {
  function Anurag1() {
    return (
      <div>
        <h1>Inside Anurag1</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Inside Anurag</h1>
    
        <Anurag1 />
    
    </div>
  );
}

function Anurag1() {
  return (
    <div>
      <h1>Inside Anurag1</h1>
    </div>
  );
}

export default Anurag;
