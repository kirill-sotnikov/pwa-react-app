import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Block from "./components/Block";

function App() {
  const [page, setPage] = useState();
  async function doReq() {
    await axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setPage(res.data);
        console.log(res.data);
      });
  }
  // async function doServiceWorker() {
  //   try {
  //     const reg = await navigator.serviceWorker
  //       .register("./sw.ts")
  //       .then(() => console.log("ok"));
  //   } catch (e) {
  //     console.log("ServiceWorker is failed", e);
  //   }
  // }

  // useEffect(() => {
  //   if (navigator.serviceWorker) {
  //     doServiceWorker();
  //   }
  // }, []);
  useEffect(() => {
    doReq();
  }, []);
  if (!page) {
    return (
      <div className="App">
        <p>loading</p>;
      </div>
    );
  }
  return (
    <div className="App">
      <p>Index</p>
      <div
        style={{
          border: "1px solid blue",
          width: "fit-content",
          margin: "0 auto",
        }}
      >
        {page.map((item, index) => {
          if (index < 10) {
            return <Block key={index} item={item} />;
          }
        })}
      </div>
    </div>
  );
}

export default App;
