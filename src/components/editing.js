import ReactDOM from "react-dom";
import React, { useState } from "react";
import { Button } from "semantic-ui-react";

function Editing() {
  const [edit, setEdit] = useState({ editToggle: "Hello" });

  const handleClick = event => {
    setEdit(state => ({ editToggle: "Good Bye" }));

    // console.log(event);
  };

  return (
    <div>
      <Button onClick={handleClick}>Edit Click</Button>

      <h1>Edit Button: {edit.editToggle}</h1>
    </div>
  );
}

export default Editing;
