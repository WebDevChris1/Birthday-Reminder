import React, { useState } from "react";

const Birthday = ({ img, name, age }) => {
  const [count, setCount] = useState(4);
  const clearAll = () => {
    setCount(0);
  };
  return (
    <>
      <h1> 4 Birthdays Today!</h1>
      <div>
        <img src={img} alt="" />
        <h2>{name}</h2>
        <h4>{age}</h4>
      </div>
      <button className="btn" onClick={clearAll}>
        Clear All
      </button>
    </>
  );
};

export default Birthday;

{
  /* <div>
        <img src={img} alt="" />
        <h2>{name}</h2>
        <h4>{age}</h4>
      </div>
      <div>
        <img src={img} alt="" />
        <h2>{name}</h2>
        <h4>{age}</h4>
      </div>
      <div>
        <img src={img} alt="" />
        <h2>{name}</h2>
        <h4>{age}</h4>
      </div> */
}
