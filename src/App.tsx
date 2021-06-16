import React from "react";
import Profile from "./Profile";
import "./App.css";

const App = () => {
  const handleClickOptions = () => {
    alert("bye");
  };

  return (
    <div className="demo1">
      hello batch 2
      <Profile
        handleClick2={handleClickOptions}
        myArray={[1, 2, 3]}
        data={{
          id: "1",
          name: "batch",
        }}
        age={3}
        name="hello batch 2 react trainning"
      />
    </div>
  );
};

export default App; // component
