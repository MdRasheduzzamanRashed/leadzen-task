import "./App.css";
import { useEffect, useState } from "react";
import DataCard from "./DataCard";

function App() {
  const [data, setData] = useState([]);
  const [dataLimit, setDataLimit] = useState([]);
// Fetching data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
// Pagination btn 
  const handleLimit = (n) => {
    if (n === 1) {
      setDataLimit(data.slice(0, 3));
      document.getElementById("btn1").classList.add("btn-active");
      document.getElementById("btn4").classList.remove("btn-active");
      document.getElementById("btn2").classList.remove("btn-active");
      document.getElementById("btn3").classList.remove("btn-active");
    }
    if (n === 2) {
      setDataLimit(data.slice(3, 6));
      document.getElementById("btn1").classList.remove("btn-active");
      document.getElementById("btn4").classList.remove("btn-active");
      document.getElementById("btn3").classList.remove("btn-active");
      document.getElementById("btn2").classList.add("btn-active");
    }
    if (n === 3) {
      setDataLimit(data.slice(6, 9));
      document.getElementById("btn1").classList.remove("btn-active");
      document.getElementById("btn2").classList.remove("btn-active");
      document.getElementById("btn4").classList.remove("btn-active");
      document.getElementById("btn3").classList.add("btn-active");
    }
    if (n === 4) {
      setDataLimit(data.slice(9, 10));
      document.getElementById("btn1").classList.remove("btn-active");
      document.getElementById("btn2").classList.remove("btn-active");
      document.getElementById("btn3").classList.remove("btn-active");
      document.getElementById("btn4").classList.add("btn-active");
    }
  };
  return (
    <div className=" bg-slate-100 p-5 grid gap-3">
      {dataLimit.length > 0
        ? dataLimit.map((d) => <DataCard key={d.id} d={d}></DataCard>)
        : data.slice(0,3).map((d) => <DataCard key={d.id} d={d}></DataCard>)}
      <div className="btn-group justify-center">
        <button className="btn btn-md btn-active" id="btn1" onClick={() => handleLimit(1)}>
          1
        </button>
        <button className="btn btn-md" id="btn2" onClick={() => handleLimit(2)}>
          2
        </button>
        <button className="btn btn-md" id="btn3" onClick={() => handleLimit(3)}>
          3
        </button>
        <button className="btn btn-md" id="btn4" onClick={() => handleLimit(4)}>
          4
        </button>
      </div>
    </div>
  );
}

export default App;
