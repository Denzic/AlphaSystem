import React, { useState, useEffect } from "react";
import UpdateDele from "./UpdateDele";
import Detailpage from "./DetailPage";

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
        <div key={index} className="operation">
          {crew.name}
        </div>
      ))}
    </div>
  );
};

export default ShowCrews;
