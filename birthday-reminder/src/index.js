import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { data } from "./data";
import Birthday from "./Birthdays";

function BirthdayList() {
  let [birthdays, setBirthdays] = useState(data);
  const clearAll = () => {
    setBirthdays([]);
  };
  return (
    <div className="container">
      <h1> {birthdays.length} Birthdays Today!</h1>
      {birthdays.map((birthday) => {
        return <Birthday key={birthday.id} {...birthday}></Birthday>;
      })}
      <button className="btn" onClick={clearAll}>
        Clear All
      </button>
    </div>
  );
}

ReactDOM.render(<BirthdayList />, document.getElementById("root"));
