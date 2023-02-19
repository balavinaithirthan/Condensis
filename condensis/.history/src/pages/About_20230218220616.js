import React from "react";
import "../Styles/About.css";
import Trie from "./components/trie";
import { useState } from "react";

export default function About() {
    return(
        <div>
            <h1>About</h1>
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