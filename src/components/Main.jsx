import React from "react";
import { useState } from "react";

function Main () {
    const [count, setCount]= useState(0);
    const handleClick = () => setCount(count + 1)
    return (
        <main>
            <h2>Main section here...</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quod eveniet a ea qui, explicabo magni vitae in, eligendi cumque iusto molestias repellendus asperiores, amet totam culpa aspernatur molestiae rem!</p>
            <h3>Counter: {count}</h3>
            <button onClick={handleClick}>Click Me!</button>
        </main>
    )
}

export default Main;