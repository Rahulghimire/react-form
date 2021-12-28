import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import "./App.css";
import DataTable from "react-data-table-component";

function App() {
  const [persons, setPersons] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState(0);
  const [city, setCity] = useState("");

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    const postData = {
      name,
      email,
      phoneNumber,
      address: {
        country,
        state,
        city,
      },
    };
    console.log(postData);
    if (state === 0) {
      alert("State should not be 0");
      return;
    }
    await axios
      .post(`https://api.najikai.com/api/v2/rahul`, postData)
      .then((response) => {
        if (response.data.status) {
          alert("Success");
        } else {
          alert("fail");
        }
      });
  };
  //Phone Number,Country,state,city
  const columns = [
    {
      name: "Full Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "E-mail",
      selector: "email",
      sortable: true,
    },
    {
      name: "PhoneNumber",
      selector: "phoneNumber",
      sortable: true,
    },
    {
      name: "Country",
      selector: "address.country",
      sortable: true,
    },
    {
      name: "State",
      selector: "address.state",
      sortable: true,
    },
    {
      name: "city",
      selector: "address.city",
      sortable: true,
    },
  ];
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
      <form action="" onSubmit={handleSubmit}>
        <div style={{ padding: "10px" }}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div style={{ padding: "10px" }}>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={{ padding: "10px" }}>
          <label>Phone number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div style={{ padding: "10px" }}>
          <label>Country:</label>
          <input
            type="text"
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div style={{ padding: "10px" }}>
          <label>State:</label>
          <input
            required
            type="number"
            value={state}
            onChange={(e) => setState(parseInt(e.target.value))}
          />
        </div>
        <div style={{ padding: "10px" }}>
          <label>City:</label>
          <input
            type="text"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <input type="submit" />
      </form>
      {/* <DataTable columns={columns} data={data} /> */}
      <DataTable columns={columns} data={persons} />
    </div>
  );
}
export default App;
