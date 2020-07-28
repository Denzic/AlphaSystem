import React from "react";

const UpdateDele = ({ crew: { id } }) => {
  const deleteOne = () => {
    fetch("weatherforecast/delete", {
      method: "DELETE",
      body: { id },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
  };

  return (
    <div>
      <a onClick={deleteOne}>Delete</a>
    </div>
  );
};

export default UpdateDele;
