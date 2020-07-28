import React from "react";

const DetailPage = ({ crew }) => {
  return (
    <div>
      <h1>{crew.name}</h1>
      <p>{crew.id}</p>
      <p>{crew.age}</p>
      <p>{crew.grade}</p>
    </div>
  );
};

export default DetailPage;
