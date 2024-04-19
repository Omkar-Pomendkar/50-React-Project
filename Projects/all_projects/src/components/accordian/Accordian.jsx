import React, { useState } from "react";
import data from "./data.js";

const Accordian = () => {
  // single Accordian
  // multiple Accordian
  const [selected, setselected] = useState(null);

    const handleSingleSelection = (getCurrentId) => {
      console.log(getCurrentId)
    };



  return (
    <div className="wrapper">
      <div className="Accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div onClick={ () => handleSingleSelection (dataItem.id)} className="title">
                <h3> {dataItem.question}</h3>
                <span>+</span>
              </div>
            </div>
          ))
        ) : (  
          <h1>No Data Found</h1>
        )}
      </div>
    </div>
  );
};

export default Accordian;
