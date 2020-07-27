import React, { useState } from "react";

export const Crud = () => {
  const [crew, setCrew] = useState({
    id: 0,
    name: "",
    age: 0,
    grade: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCrew((prev) => {
      return {
        ...prev,
        [name]: parseInt(value) || value,
      };
    });
    console.log(crew);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    await fetch("weatherforecast/post", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(crew),
    });
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input type="text" name="id" onChange={handleChange} value={crew.id} />
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={crew.name}
        />
        <input
          type="text"
          name="age"
          onChange={handleChange}
          value={crew.age}
        />
        <input
          type="text"
          name="grade"
          onChange={handleChange}
          value={crew.grade}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Crud;
