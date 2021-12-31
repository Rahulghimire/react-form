import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import "./App.css";
import PostForm from "./Components/PostForm";
import TheDataTable from "./Components/TheDataTable";
// import Practice from "./Components/Practice";
function App() {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    const getPersons = async () => {
      const response = await axios.get("https://api.najikai.com/api/v2/rahul");
      if (response.data.status) {
        const p = response.data.data.persons;
        setPersons(p);
      }
    };
    getPersons();
  }, []);
  return (
    <div>
      <ul>
        {persons.map((person, idx) => {
          return (
            <div>
              <li key={idx}>{person.name}</li>
              <p>{moment(person.createdAt).fromNow()}</p>
              {/* <p>{moment(person.updatedAt).fromNow()}</p> */}
            </div>
          );
        })}
      </ul>
      <PostForm persons={persons} />
      {/* <DataTable columns={columns} data={data} /> */}
      <TheDataTable persons={persons} />
      {/* <Practice /> */}
    </div>
  );
}
export default App;
