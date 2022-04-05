import React, { useState } from "react";
import plusIcon from "../Img/plus.png"
import "./Sidebar.css";

function Sidebar(Note) {
  const colors = ["#F48687", "#F9D288", "#B964F7", "#5DC250"] 
    

  const [listColors, setListColors] = useState(false);
  

  return (
    <div className="sidebar">
      <img  src={plusIcon} alt="Add" onClick={() => setListColors(!listColors)} />
      <ul className={`sidebar_list ${listColors ? "sidebar_list_active" : ""}`}>
        {colors.map((item, index) => (
          <li
            /* key={index} */
            className="sidebar_list_item"
            style={{ backgroundColor: item }}
            /* onClick={() => Note(item)} */
          />
        ))}
      </ul>
    </div>
    
  );
}

export default Sidebar;
 