import { useState } from "react";

export default function SearchBar() {
    const [inputValue, setInputValue] = useState(" ");

    
    return (
        <div>
            <input type="text" />
            <p>{inputValue}</p>
        </div>
    );
};