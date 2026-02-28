import React from "react";
import axios from "axios";
import { useState } from "react";
import Card from "./components/Card";
import { useEffect } from "react";

const App = () => {
  const [allUsers, setallUsers] = useState([]);

  async function getData() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );

    setallUsers(response.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="bg-black p-5 flex flex-wrap">
        {allUsers.map((elem, idx) => {
          return (
            <div key={idx}>
              <Card elem={elem} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
