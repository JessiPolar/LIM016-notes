import React, { useState } from "react";

import plusIcon from "../../components/Img/plus.png";

import "./Sidebar.css";

function Sidebar(props) {
  const colors = ["#F48687", "#FDF1F1", "#F9D288", "#FEFAF1", "#B964F7", "#F3F0FD", "#5DC250", "#F2FAF1", "#5D93E1", "ECF3FC"];

  const [listOpen, setListOpen] = useState(false);

  return (
    <div className="sidebar">
      <img src={plusIcon} alt="Add" onClick={() => setListOpen(!listOpen)} />
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
        {colors.map((item, index) => (
          <li
            key={index}
            className="sidebar_list_item"
            style={{ backgroundColor: item }}
            onClick={() => props.addNote(item)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;