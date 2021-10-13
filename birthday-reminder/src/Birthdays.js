import React from "react";

const Birthday = ({ img, name, age }) => {
  return (
    <>
      <div className="birthday-people">
        <img src={img} alt="" className="profile-img" />
        <span>
          <h2>{name}</h2>
          <h4>{age}</h4>
        </span>
      </div>
    </>
  );
};

export default Birthday;
