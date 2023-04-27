import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import Data from "./Data";

export function Home() {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [fetchData, setFetchData] = useState();
  const [data, setData] = useState()

//   function getData() {
//     axios
//       .get("https://jsonplaceholder.typicode.com/comments")
//       .then((res) => res);
//   }

/* 
Need to learn more on useMemo, at the moment, the way I implemented it seems to be working
the same as if I store my data from worker into state. 
However, Web Worker is amazing. Performance for site really makes a difference

With Web Worker: 
225ms

Without Web Worker:
5.46ms load time
*/
const memoized = useMemo(() => new Worker(new URL("./worker.js", import.meta.url)))
  useEffect(() => {
    if (window.Worker) {
        memoized.postMessage("DO WORK")
        memoized.onmessage = function(e) {
            console.log(e.data, "WORKER")
            setData(e.data)
        }
    }
  }, []);
  

// useEffect(() => {
//     let final = 0;
//     for (let i = 0; i < 10000000000; i++) {
//         final + 1
//     }
//     setData(final)
// }, [])
//   const memoized = useMemo(() => {
//     const myWorker = new Worker(new URL("./worker.js", import.meta.url));
//     myWorker.postMessage("do work");
//     myWorker.onmessage = function (e) {
//       console.log(e.data);
//       console.log("IMAGINARY DATA")
//   }, [])


  function handleClick() {
    setToggle(!toggle);
  }

  function increment() {
    setData((prev) => prev + 1)
  }

  return (
    <div>
      <h1>HOME</h1>
      <button onClick={() => navigate("/dummy")}>To DUMMY</button>
      <button onClick={handleClick}>CLICK ME</button>
      {toggle ? <p>TRUE</p> : <p>FALSE</p>}
      {/* <button onClick={fetchCrazyData}>FETCH CRAZY DATA</button> */}
      {!data && <p>Loading...</p>}
      {data && <Data memoized={data}/>}
      
      <button onClick={increment}>INCREMENT DATA</button>
      <p>DATA: {data}</p>
    </div>
  );
}
