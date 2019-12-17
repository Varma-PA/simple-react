import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";

const Normal = props => {
  const [data, setData] = useState({
    username: "",
    password: "",
    editButtonClicked: false
  });

  //   useEffect(() => {
  //     setData(props.info);
  //   }, []);

  const handleSubmit = event => {
    event.preventDefault();
    console.log(data);
  };

  const changingData = event => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const ChangeEditMode = () => {
    setData(state => ({
      ...data,
      editButtonClicked: !state.editButtonClicked
    }));
  };

  const EditMode = props => {
    return (
      <div>
        <h1>
          Username :{" "}
          <input
            type="text"
            placeholder="something"
            value={data.username}
            name="username"
            onChange={changingData}
          />
        </h1>
        <h1>
          Password :{" "}
          <input
            type="password"
            placeholder="password"
            value={data.password}
            name="password"
            onChange={changingData}
          />
        </h1>
        <h1>Edit: {data.editButtonClicked ? "true" : "false"}</h1>
      </div>
    );
  };

  const NonEditMode = () => {
    return (
      <div>
        <h1>Username :{data.username}</h1>
        <h1>Password :{data.password}</h1>
        <h1>Edit: {data.editButtonClicked ? "true" : "false"}</h1>
      </div>
    );
  };

  return (
    <div>
      <h1>Inside Editing Tab</h1>

      <Button onClick={ChangeEditMode}>Edit</Button>

      {data.editButtonClicked ? (
        <div>
          <h1>
            Username :{" "}
            <input
              type="text"
              placeholder="something"
              value={data.username}
              name="username"
              onChange={changingData}
            />
          </h1>
          <h1>
            Password :{" "}
            <input
              type="password"
              placeholder="password"
              value={data.password}
              name="password"
              onChange={changingData}
            />
          </h1>
        </div>
      ) : (
        <NonEditMode />
      )}

      <h1>Edit: {data.editButtonClicked ? "true" : "false"}</h1>

      <h1>Username : {data.username}</h1>
      <h1>Password : {data.password}</h1>
      <h1>Edit: {data.editButtonClicked ? "true" : "false"}</h1>
    </div>
  );
};

// const EditMode = () => {
//   const [data, setData] = useState({
//     username: "",
//     password: "",
//     editButtonClicked: false
//   });

//   const changingData = event => {
//     setData({ ...data, [event.target.name]: event.target.value });
//   };

//   const HandleSubmit = event => {
//     event.preventDefault();
//     return <Normal info={data} />;
//   };

//   return (
//     <div>
//       <form onSubmit={HandleSubmit}>
//         <h1>
//           Username :{" "}
//           <input
//             type="text"
//             placeholder="something"
//             value={data.username}
//             name="username"
//             onChange={changingData}
//           />
//         </h1>
//         <h1>
//           Password :{" "}
//           <input
//             type="password"
//             placeholder="password"
//             value={data.password}
//             name="password"
//             onChange={changingData}
//           />
//         </h1>
//         <h1>Edit: {data.editButtonClicked ? "true" : "false"}</h1>
//         <Button type="submit">Submit</Button>
//       </form>
//     </div>
//   );
// };

export default Normal;
