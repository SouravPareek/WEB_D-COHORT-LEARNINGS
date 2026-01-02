import React, { useState } from "react";

const App = () => {
  const [marks, setMarks] = useState([33, 90, 76, 45, 16, 31]);
  let giveGrace = ()=>{
    const newMarks = marks.map((elem)=>{
        return elem < 95 ? elem + 5 : 100
    })
    setMarks(newMarks)
  }
  return (
    <div>
      {marks.map(function(elem, idx){
        return <h1 key = {idx}>Marks of Student {idx+1}: {elem} ({elem >= 33 ? 'PASS' : 'FAIL'})</h1>
      })}
      <button onClick={giveGrace}>Click here to give grace marks</button>
    </div>
  );
};

export default App;
