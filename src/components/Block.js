import React, { useState } from "react";
const Block = ({ item }) => {
  const [col, setCol] = useState("black");
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: 10,
        margin: 10,
        backgroundColor: "white",
      }}
    >
      <p style={{ color: col }}>{item.title}</p>
      <p style={{ color: col }}>{item.completed ? "completed" : "not comp"}</p>
      <button style={{ margin: 10 }} onClick={() => setCol("blue")}>
        Change Col
      </button>
    </div>
  );
};
export default Block;
