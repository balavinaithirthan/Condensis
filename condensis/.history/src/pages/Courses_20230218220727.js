import React from "react";
import "../Styles/Courses.css";

export default function Courses() {
    return(
        <div>
        <div>
            <h1>Courses</h1>
        </div>
        <div className="Search">
      <input
        type="text"
        name="search-bar"
        id="search-bar"
        placeholder="Search..."
        value={prefix}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <input
        type="text"
        name="search-bar"
        id="search-bar2"
        value={suggestion}
      />
    </div>
        </div>
    );
}