import React, { useState, useEffect } from "react";

const ShowCrews = () => {
  const [crews, setCrews] = useState([]);

  useEffect(() => {
    getCrews();
  }, []);

  const getCrews = async () => {
    const response = await fetch("weatherforecast/crews");
    const data = await response.json();
    setCrews(data);
  };

  return (
    <div>
      {crews.map((crew, index) => (
        <div key={index}>{crew.name}</div>
      ))}
    </div>
  );
};

export default ShowCrews;
